/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-restricted-globals */
/* eslint-disable prettier/prettier */
import React, { Fragment, useEffect, useState } from "react";
import {
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
} from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { Center, SegmentedControl, Box } from '@mantine/core';
import { UseUserContext } from "../context/UpcomingContext";

function AllLikeComments({ setLikeOpen, open, post }) {
    const [currentUser, users] = UseUserContext();
    const [likeCommet, setLikeCommet] = useState(post?.likes);

    useEffect(() => {
        setLikeCommet(post?.likes)
    }, [post]);

    const likeCommentUser = (email) => users?.find(u => u?.email?.includes(email));

    return (
        <Fragment>
            <Dialog
                className="flex !bg-[#4b69c269] items-center justify-end sm:justify-center !w-full"
                size="xxl"
                open={open}
                handler={setLikeOpen}
            >
                <div className="w-full sm:w-[60%] lg:w-[40%] max-h-[500px] overflow-y-auto !bg-[#1c1f2e] rounded-t-xl relative sm:!rounded-xl p-3">
                    <div onClick={() => setLikeOpen(!open)} className="text-2xl cursor-pointer absolute top-[5px] right-[5px] rounded-full text-white">
                        <AiOutlineClose />
                    </div>
                    <DialogHeader className="flex !text-white py-0 items-center justify-between">
                        <h1 className="text-xl">All likes Your Post</h1>
                        <div className="pr-3">
                            <SegmentedControl
                                className="bg-blue-gray-800"
                                color="violet"
                                data={[
                                    {
                                        value: 'Likes',
                                        label: (
                                            <Center className="text-white" onClick={() => setLikeCommet(post?.likes)}>
                                                <Box ml={10}>Likes</Box>
                                            </Center>
                                        ),
                                    },
                                    {
                                        value: 'Comments',
                                        label: (
                                            <Center className="text-white" onClick={() => setLikeCommet(post?.comments)}>
                                                <Box ml={10}>Comments</Box>
                                            </Center>
                                        ),
                                    },
                                ]}
                            />
                        </div>
                    </DialogHeader>
                    <DialogBody className="!w-full">
                        <div className="w-full">
                            {
                                likeCommet?.map((l, index) => (
                                    <div key={index} className="w-full bg-blue-gray-900 rounded-lg mb-1 px-4 py-2">
                                        <div className="w-full flex items-center justify-between">
                                            <div className="flex items-center">
                                                {(likeCommentUser(l.email)?.img) && (
                                                    <div className='w-[30px] h-[30px] bottom-[-20px] rounded-full ring-2 cursor-pointer ring-offset-2 ring-blue-600'>
                                                        <img src={likeCommentUser(l.email)?.img} className="w-[30px] h-[30px] rounded-full" alt="user" />
                                                    </div>
                                                )}
                                                {!(likeCommentUser(l.email)?.img) && (
                                                    <div className="w-[30px] h-[30] ring-2 cursor-pointer ring-offset-2 ring-blue-800 rounded-full bg-blue-600 flex items-center justify-center">
                                                        <h1 className="text-xl text-white font-bold">
                                                            {likeCommentUser(l.email)?.name?.slice(0, 1)}
                                                        </h1>
                                                    </div>
                                                )}
                                                <div className='ml-2'>
                                                    <h4 className='capitalize mb-[-2px]'>{likeCommentUser(l.email)?.name}</h4>
                                                    <small className='text-xm block text-gray-500 mt-[-3px]'>{likeCommentUser(l.email)?.address}</small>
                                                </div>
                                            </div>
                                            <span><FcLike /></span>
                                        </div>
                                        {l?.comment && <p className="inline-block p-2 mt-2  border rounded-xl border-blue-gray-800 text-sm">{l?.comment}</p>}
                                    </div>
                                ))
                            }
                            {!(post?.comments) && <p className="text-center text-xl">No Comment available</p>}
                        </div>
                    </DialogBody>
                </div>
            </Dialog>
        </Fragment>
    );
}

export default AllLikeComments;

