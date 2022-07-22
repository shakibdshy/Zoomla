import React from 'react'
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import banner1 from "../assets/banner1.PNG"
import author from "../assets/shakib.jpg"
import author2 from "../assets/rohul.png"
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';

function HomeRight() {
    const data = [
        {
            name: "Design Daily Zoomla Meeting",
            time: "10:00-11:00",
            hours: "8",
            user: [author, author2, author, author2, author2, author, author2, author2, author, author2,]
        },
        {
            name: "Design Daily Zoomla Meeting",
            time: "09:00-10:00",
            hours: "6",
            user: [author, author2, author]
        },
        {
            name: "Design Daily Zoomla Meeting",
            time: "08:00-09:00",
            hours: "2",
            user: [author, author2, author, author2, author2, author2,]
        },
        {
            name: "Design Daily Zoomla Meeting",
            time: "10:00-11:00",
            hours: "12",
            user: [author, author2, author]
        }
    ]
  return (
    <div>
        <div className="w-full">
                <div className='h-screen w-full flex md:block'>
                    <div className='w-full rounded-2xl p-4'>
                        <div className='w-full'>
                            <Image
                                className='rounded-xl w-full mx-auto'
                                src={banner1}
                                alt="banner"
                                width={700}
                                height={240}
                            />
                        </div>
                        <div className='mt-4 grid gap-3'>
                            {
                                data.map(i => <div className='w-full border bg-[#2d2b2b] border-grey-800 p-5 rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <h1 className="text-xl font-bold">{i.name}</h1>
                                    <div>
                                    <div className="bg-base-200">
                                    <Button size="sm" className="!text-grey-500 bg-[#393838] border border-[#4d4c4c] text-xl" variant="text"><BsThreeDots /></Button>
                                    </div>
                                    </div>
                                </div>
                                <div className="text-xs mt-2 text-grey-400 flex items-center">
                                    <span className="!mr-2"> <MdOutlineWatchLater /> </span>
                                    <span className=""> {i.time}</span>
                                    <span className="mx-2">|</span>
                                    <span className="">start in {i.hours} hours</span>
                                </div>
                                <div className='flex justify-between mt-8 items-center'>
                                    <div className="flex items-center !gap-x-2">
                                        {
                                            i.user.slice(0, 3).map(u => <div className="">
                                                <div>
                                                    <Image
                                                        className='rounded-lg w-full mx-auto'
                                                        src={u}
                                                        alt="banner"
                                                        width={36}
                                                        height={40}
                                                    />
                                                </div>
                                        </div>)
                                        }
                                        {(i.user.length > 3) && <div>
                                               <Button variant="filled" className='!font-bold mb-1 !px-3'>+{i.user.length - 3}</Button>
                                            </div>}
                                    </div>
                                    <div>
                                        <Button size="md" className="!text-grey-500 !px-3 bg-[#393838] border border-[#4d4c4c] mr-2 lowercase" variant="text">id</Button>
                                        <Button variant="filled" className='text-xl capitalize'>start</Button>
                                    </div>
                                </div>
                            </div>)
                            } 
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default HomeRight