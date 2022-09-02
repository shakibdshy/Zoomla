/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import author from "../assets/shakib.jpg";
// import author2 from "../assets/rohul.png";
import { UseStoryContext } from '../context/UpcomingContext';

const Story = ({ storyShow }) => {
    const [story] = UseStoryContext()

    // const storyLength = () => {
    //     let number = 1
    //     if (story.length > 8) {
    //         return number = 7;
    //     } else {
    //         return number = story.length - 1;
    //     }
    //     return number;
    // }


    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className=""
            breakpoints={{
                600: {
                    slidesPerView: 4,
                },
                868: {
                    slidesPerView: 5,
                },
                1024: {
                    slidesPerView: 7,
                },
            }}
        >
            {
                story?.slice(0, 50).map((u, index) => (
                    <SwiperSlide className='text-center' key={index}>
                        <div onClick={() => storyShow(story)} className='xl:w-[80px] xl:h-[80px] lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] mx-auto  mt-2 !bg-[#1c1f2e] rounded-full sm:ring-[4px] ring-[2px] cursor-pointer ring-offset-[1px] sm:ring-offset-[3px] ring-gradient-to-r from-cyan-500 to-blue-500'>
                            <img src={u.img} alt="user" className='xl:w-[80px] xl:h-[80px] lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] mx-auto rounded-full overflow-hidden' />
                        </div>
                        <p className='mt-3'>{u?.name?.slice(0, 5)}</p>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Story;