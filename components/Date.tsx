import React, { ReactNode, useEffect, useState } from 'react'
import banner from "../assets/banner.png"
import Image from 'next/image'

function DateComponent(): ReactNode {
    const [clock, setClock] = useState<string>(new Date().toLocaleTimeString());

    const dates = new Date().toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    

    useEffect(() => {
        const clock = setInterval(
            (): void => setClock(new Date().toLocaleTimeString()),
            1000
        );

        return () => {
            clearInterval(clock);
        };
    }, []);

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
                    <h1 className='text-3xl md:text-4xl lg:text-6xl text-white font-bold'>
                        {clock}
                    </h1>
                    <p className='sm:text-xl mt-3 text-white font-bold'>
                        {dates}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DateComponent