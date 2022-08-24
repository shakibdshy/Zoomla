/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-restricted-globals */
/* eslint-disable prettier/prettier */
import React, { Fragment } from "react";
import {
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { AiOutlineClose } from "react-icons/ai";

function StoryShow({ setStoryOpen, open, stories }) {

    return (
        <Fragment>
            <Dialog
                className="flex !bg-[#4b69c294] items-center justify-start sm:justify-center !w-full"
                size="xxl"
                open={open}
                handler={setStoryOpen}
            >
                <div className="w-full sm:w-[80%] lg:w-[60%] max-h-screen overflow-y-auto !bg-[#1c1f2e] relative rounded-t-2xl sm:!rounded-2xl p-3">
                    <div onClick={() => setStoryOpen(!open)} className="text-2xl cursor-pointer absolute top-[5px] right-[5px] rounded-full text-white">
                        <AiOutlineClose />
                    </div>
                    <DialogBody className="!w-full  !block">
                        <Swiper
                            pagination={{
                                type: "progressbar",
                            }}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {
                                stories?.map(p => (
                                    <>
                                        <SwiperSlide className=''>
                                            <div className='flex items-center p-3'>
                                                {(p?.img) && (
                                                    <div className='w-[36px] h-[36px] bottom-[-20px] rounded-full ring-2 cursor-pointer ring-offset-2 ring-blue-600'>
                                                        <img src={p?.img} className="w-[36px] h-[36px] rounded-full" alt="user" />
                                                    </div>
                                                )}
                                                {!(p?.img) && (
                                                    <div className="w-[26px] h-[36] ring-2 cursor-pointer ring-offset-2 ring-blue-800 rounded-full bg-blue-600 flex items-center justify-center">
                                                        <h1 className="text-xl text-white font-bold">
                                                            {p?.name.slice(0, 1)}
                                                        </h1>
                                                    </div>
                                                )}
                                                {/* <img src={p.uImg} alt="user" className='rounded-full w-[36px] h-[36px]' /> */}
                                                <div className='ml-2'>
                                                    <h4 className='capitalize text-white mb-[-2px]'>{p?.name}</h4>
                                                    <small className='text-xm block text-gray-500 mt-[-3px]'>{p?.email}</small>
                                                </div>
                                            </div>
                                            <div className='w-full rounded-2xl my-2'>
                                                <img src={p.img} className='w-full max-h-[500px] rounded-2xl' alt="post img" />
                                            </div>
                                        </SwiperSlide>
                                    </>
                                ))
                            }
                        </Swiper>
                    </DialogBody>
                </div>
            </Dialog>
        </Fragment>
    );
}

export default StoryShow;

