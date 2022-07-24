import Image from 'next/image'
import banner from "../assets/banner.png"
import React, { useState, useEffect } from 'react'
import { format } from 'date-fns';

function Banner() {
    const formateDate = format(new Date, 'PP')
    const [time, setTime] = useState()
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]

    const calculateTime = () => {
        let date = new Date();
        let timeLeft = {};

        timeLeft = {
            days: date.getDay(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        };

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(calculateTime());
        }, 1000);
      
        return () => clearTimeout(timer);
      }, [calculateTime()]);

    return (
    <div className='w-full relative mb-3'>
        <Image
            className='rounded-xl w-full mx-auto'
            src={banner}
            alt="banner"
            width={700}
            height={240}
        />
        <div className='absolute rounded-xl w-full flex items-center h-full p-4 top-0 left-0'>
            <div className='ml-0 sm:ml-3'>
                <h1 className='text-3xl md:text-4xl lg:text-6xl text-white font-bold'>{time?.hours} : {time?.minutes}<span className='text-xl font-bold'> /{time?.seconds}</span></h1>
                <p className='sm:text-xl mt-3 text-white font-bold'>{weekday} - {formateDate}</p>
            </div>
        </div>
    </div>
  )
}

export default Banner