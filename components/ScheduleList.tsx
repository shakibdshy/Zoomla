import React from 'react'
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import author from "../assets/shakib.jpg"
import author2 from "../assets/rohul.png"
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { useRouter } from 'next/router';
import { AnyTxtRecord } from 'dns';

type data = {
    setUser: React.Dispatch<React.SetStateAction<{
        data: {
            name: string;
            time: string;
            hours: string;
            user: any[];
        };
    }>>
}

type user = {
    data: {
        name: string;
        time: string;
        hours: string;
        user: any;
    }
}

type props = {
    setUser: (val: any) => void
}

function ScheduleList ({ setUser }: props) {
    const { asPath } = useRouter();
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
        <div className='w-full text-white'>
            <div className='grid gap-3'>
                {
                    data.map((i, index) => (
                        <>
                            <div key={index} onClick={() => setUser(i)} className='w-full border bg-[#212534] border-grey-800 p-3 sm:p-5 rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <h1 className="text-xl font-bold">{i.name}</h1>
                                    <div>
                                        <div className="bg-base-200">
                                            {!(asPath === '/meeting') && <Button size="sm" className="!text-grey-500 bg-[#393838] border border-[#4d4c4c] text-xl" variant="text"><BsThreeDots /></Button>}
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
                                            i.user.slice(0, 3).map(u => (
                                                <>
                                                    <div className="">
                                                        <div>
                                                            <Image
                                                                className='rounded-lg w-full mx-auto'
                                                                src={u}
                                                                alt="user"
                                                                width={36}
                                                                height={40}
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }
                                        {(i.user.length > 3) && <div>
                                            <Button variant="filled" className='!font-bold mb-1 !px-3'>+{i.user.length - 3}</Button>
                                        </div>}
                                    </div>
                                    <div>
                                        <Button size="md" className="!text-grey-500 !px-3 bg-[#282c3a] border border-[#4d4c4c] mr-2 lowercase" variant="text">id</Button>
                                        {!(asPath === '/meeting') && <Button variant="filled" className='text-xl sm:!px-4 !px-3 capitalize'>start</Button>}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default ScheduleList;