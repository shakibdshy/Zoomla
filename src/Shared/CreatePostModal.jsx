/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-globals */
import React, { Fragment } from "react";
import { useRef } from 'react';
import { useState } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogFooter,
    DialogBody,
} from "@material-tailwind/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { AiOutlineClose } from "react-icons/ai";
import { ImFilePicture } from "react-icons/im";
import { FaRegFileVideo } from "react-icons/fa";
import { toast } from "react-toastify";
import { UseFeedContext } from "../context/UpcomingContext";
import { LoadingOverlay, useMantineColorScheme } from "@mantine/core";

const CreatePostModal = ({ open, setPostOpen }) => {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const [, setFeed,] = UseFeedContext()
    const [user] = useAuthState(auth);
    const [image, setImage] = useState();
    const [img, setImg] = useState()
    const [title, setTitle] = useState()
    const imageRef = useRef();
    const [visible, setVisible] = useState(false);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImg(img)
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }
    const imageStorageKey = '290c7a0f169eabc5cf1f1fe286564c38';
    const handlePost = async () => {
        setVisible(true);
        const fromData = new FormData();
        fromData.append('image', img);
        console.log(img)

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    console.log('imgbb', result)
                    const img = result.data?.url;

                    const data = {
                        title: title,
                        date: new Date(),
                        email: user?.email,
                        name: user?.displayName,
                        img,
                    }

                    console.log(data)
                    // send data backend
                    fetch("https://zoomla-backend.herokuapp.com/api/feed", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data) {
                                setFeed(data)
                                setVisible(false);
                                setPostOpen(!open)
                                toast.dark(`Feed post ${title} successfully`);
                            }
                        })
                }
            })

    }

    return (
        <Fragment>
            <Dialog
                className={`${dark ? "!bg-[#4b69c294]" : "!bg-[#0509157a]"} flex !bg-[#4b69c294] items-center justify-end sm:justify-center !w-full`}
                size="xxl"
                open={open}
                handler={setPostOpen}
            >
                <div className={`${dark ? "!bg-[#1c1f2e] text-white" : "!bg-[#fff] text-[#000]"} w-full md:w-[60%] lg:w-[40%] overflow-y-auto !bg-[#1c1f2e] rounded-t-xl relative sm:!rounded-xl p-3 `}>
                    <div onClick={() => setPostOpen(!open)} className="text-2xl cursor-pointer absolute top-[5px] right-[5px] rounded-full">
                        <AiOutlineClose />
                    </div>
                    <DialogHeader className="flex !text-white items-center justify-between sm:!p-4 !px-0">
                        <div className='flex items-center'>
                            {user?.displayName && (
                                <div className="w-[40px] h-[40px] ring-2 cursor-pointer ring-offset-2 ring-blue-800 rounded-full bg-blue-600 flex items-center justify-center">
                                    <h1 className="text-xl text-white font-bold">
                                        {user?.displayName.slice(0, 1)}
                                    </h1>
                                </div>
                            )}
                            <div className='ml-3'>
                                <input
                                    className={`${dark ? "border-[#2d303d] bg-[#212534] text-[#b1afaf]" : "text-[#0e78f9] border-[#c2daf8]"} border text-sm !w-[90%] px-4 !py-[8px] rounded-[24px] outline-0`}
                                    type="text"
                                    onChange={() => setTitle(event.target.value)}
                                    placeholder="Text something"
                                    id=""
                                />
                            </div>
                        </div>
                    </DialogHeader>
                    <DialogBody className="sm:!p-4 !p-0">
                        <LoadingOverlay visible={visible} overlayBlur={2} />
                        <div className='w-full rounded-2xl'>
                            {image && <img src={image.image} className='w-full rounded-2xl' alt="post img" />}
                            {/* <img src={post2} className='w-full rounded-2xl' alt="post img" /> */}
                        </div>
                    </DialogBody>
                    <DialogFooter className="flex justify-between items-center w-full sm:!p-4 !px-0">
                        <ul className="flex items-center gap-x-2 sm:gap-x-5">
                            <li onClick={() => imageRef.current.click()} className="flex cursor-pointer items-center">
                                <span className="text-[20px] sm:text-[30px] text-blue-700 font-bold"><ImFilePicture /></span>
                                <span className="ml-1">Picture</span>
                                <div style={{ display: 'none' }} className="hidden">
                                    <input type="file" name="images" onChange={onImageChange} ref={imageRef} id="" />
                                </div>
                            </li>
                            <li className="flex items-center">
                                <span className="text-[20px] sm:text-[30px] text-[#8e44ad] font-bold"><FaRegFileVideo /></span>
                                <span className="ml-1">video</span>
                            </li>
                        </ul>
                        <div className="flex items-center">
                            <Button
                                onClick={() => setPostOpen(!open)}
                                size="sm"
                                className={` ${dark ? "bg-[#282c3a] text-gray-500" : "!bg-[#eff6ff] text-[#0e78f9]"} !px-4 capitalize flex items-center`}
                                variant="text"
                            >
                                cancel
                            </Button>
                            <Button
                                disabled={!image}
                                onClick={() => handlePost()}
                                size="sm"
                                className="!text-white border ml-3 bg-[#8e44ad] hover:bg-[#8e44ad] border-gray-800 !px-4 capitalize flex items-center"
                                variant="text"
                            >
                                Share
                            </Button>
                        </div>
                    </DialogFooter>
                </div>
            </Dialog>
        </Fragment>
    );
};

export default CreatePostModal;
