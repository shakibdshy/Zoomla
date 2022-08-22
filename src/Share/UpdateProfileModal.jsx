/* eslint-disable no-restricted-globals */
/* eslint-disable prettier/prettier */
import React, { Fragment, useRef, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { UseUserContext } from "../context/UpcommingContext";


function UpdateProfileModal({ setUpdateOpen, user, open }) {
    const [users] = useAuthState(auth);
    const [, , setUser] = UseUserContext();

    const [image, setImage] = useState();
    const [img, setImg] = useState(user?.img)
    const imageRef = useRef();
    const [name, setName] = useState(user?.name)
    const [phone, setPhone] = useState(user?.phone ? user?.phone : "8801.....")
    const [email, setEmail] = useState(users?.email)
    const [address, setAddress] = useState("Nalitabari serpur")
    const [bio, setBio] = useState(user?.bio ? user?.bio : "Enter Your bio data")

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

    const handleUpdate = async (e) => {
        e.preventDefault();
        const fromData = new FormData();
        fromData.append('image', img);
        console.log(img, "img")

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    console.log('imgbb', result)
                    const imgUrl = result.data?.url;

                    const data = {
                        name: name,
                        email: email,
                        phone: phone,
                        address: address,
                        bio: bio,
                        img: imgUrl,
                    }

                    console.log(data, "server")
                    // send data backend
                    fetch(`http://localhost:5000/UpdateUser/${user?._id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data?.users) {
                                setUpdateOpen(!open)
                                setUser(users);
                                toast.dark("Update Profile successfully");
                            }
                        })
                }
            })

    }

    return (
        <Fragment>
            <Dialog
                className="flex !bg-[#4b69c294] items-center justify-end sm:justify-center !w-full"
                size="xxl"
                open={open}
                handler={setUpdateOpen}
            >
                <div className="w-full sm:w-[60%] lg:w-[40%] max-h-[620px] overflow-y-auto !bg-[#1c1f2e] rounded-t-2xl sm:!rounded-2xl p-3 sm:p-6">
                    <DialogHeader className="flex !text-white !px-0 items-center justify-between">
                        <h1 className="text-2xl">Update Profile</h1>
                    </DialogHeader>
                    <form onSubmit={handleUpdate}>
                        <DialogBody className="!p-0 !w-full !block border-y !text-white border-[#31364d]">
                            <div className="modal-box p-2 sm:p-4">
                                <div className="mt-3">
                                    <div className="flex text-center justify-between items-center">
                                        <div onClick={() => imageRef.current.click()} className="rounded-full cursor-pointer">
                                            {(image || user?.img) && <div className="w-20 rounded-full ring bg-blue-200 ring-green-500 ring-offset-base-100 ring-offset-2">
                                                {!image && <img src={user?.img} className='rounded-full w-20' alt='profile' />}
                                                {image && <img src={image?.image} className='rounded-full w-20' alt='profile' />}
                                            </div>}
                                            {!((user?.img) || image) && (
                                                <div className="w-[120px] h-[120px] ring-2 cursor-pointer ring-offset-2 ring-blue-800 rounded-full bg-blue-600 flex items-center justify-center">
                                                    <h1 className="text-5xl uppercase text-white font-bold">
                                                        {user?.name.slice(0, 2)}
                                                    </h1>
                                                </div>
                                            )}
                                            <div style={{ display: 'none' }} className="hidden">
                                                <input type="file" name="images" onChange={onImageChange} ref={imageRef} id="" />
                                            </div>
                                        </div>
                                        <div className=" w-full ml-3">
                                            <input type="text" required name='name' onChange={(e) => setName(e.target.value)} value={name} placeholder={user?.name} className="!text-gray-500 border text-sm !w-full px-4 !py-[8px] rounded-[14px] mb-3 outline-0 border-[#2d303d] bg-[#252a3d]" />
                                            <input type="text" required name='address' onChange={(e) => setAddress(e.target.value)} value={address} placeholder={user?.address} className="!text-gray-500 border text-sm !w-full px-4 !py-[8px] rounded-[14px] outline-0 border-[#2d303d] bg-[#252a3d]" />
                                        </div>
                                    </div>
                                    <div className=" w-full flex items-center justify-between gap-x-3 mt-3">
                                        <input type="text" name='phone' required onChange={(e) => setPhone(e.target.value)} value={phone} placeholder={user?.phone} className="!text-gray-500 border text-sm !w-full px-4 !py-[8px] rounded-[14px] outline-0 border-[#2d303d] bg-[#252a3d]" />
                                        <input type="text" name='email' required onChange={(e) => setEmail(e.target.value)} value={email} placeholder={user?.email} className="!text-gray-500 border text-sm !w-full px-4 !py-[8px] rounded-[14px] outline-0 border-[#2d303d] bg-[#252a3d]" />
                                    </div>
                                    <div className="mt-4">
                                        <textarea name='bio' required value={bio} onChange={(e) => setBio(e.target.value)} className="!text-gray-500 border text-sm !w-full px-4 !py-[8px] rounded-[10px] outline-0 border-[#2d303d] bg-[#252a3d]" placeholder="Bio data"></textarea>
                                    </div>
                                </div>
                            </div>
                        </DialogBody>
                        <DialogFooter className="text-left w-full">
                            <div className="flex items-center">
                                <Button
                                    onClick={() => setUpdateOpen(!open)}
                                    size="sm"
                                    className="!text-gray-500 border bg-[#282c3a] border-gray-800 !px-4 mr-3 capitalize flex items-center"
                                    variant="text"
                                >
                                    Cancel
                                </Button>
                                <input type="submit" value="Save" className="!text-white border text-sm px-4 !py-[5px] cursor-pointer rounded-[14px] outline-0 border-[#8699ef] bg-[#3a7ef4]" />
                            </div>
                        </DialogFooter>
                    </form>
                </div>
            </Dialog>
        </Fragment>
    );
}

export default UpdateProfileModal;