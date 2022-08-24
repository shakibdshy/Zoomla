/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import author from "../assets/shakib.jpg";
// import author2 from "../assets/rohul.png";
import { UseStoryContext } from '../context/UpcommingContext';

const Story = ({ storyShow }) => {
    const [story] = UseStoryContext()

    const storyLength = () => {
        let number = 1
        if (story.length > 8) {
            return number = 7;
        } else {
            return number = story.length - 1;
        }
        return number;
    }


    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={storyLength()}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="text-white"
        >
            {
                story.map(u => (
                    <SwiperSlide className='text-center'>
                        <div onClick={() => storyShow(story)} className='w-[80px] mx-auto h-[80px] mt-2 !bg-[#1c1f2e] rounded-full ring-[4px] cursor-pointer ring-offset-[3px] ring-[#8e44ad]'>
                            <img src={u.img} alt="user" className='w-[80px] mx-auto h-[80px] rounded-full overflow-hidden' />
                        </div>
                        <p className='text-white mt-3'>{u.name.slice(0, 5)}</p>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default Story;