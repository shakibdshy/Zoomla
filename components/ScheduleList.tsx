import React from 'react'
import { Button, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import type { MenuHandlerProps } from "@material-tailwind/react";
import Image from "next/image";
import author from "../assets/shakib.jpg"
import author2 from "../assets/rohul.png"
import { MdOutlineWatchLater } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import { useRouter } from 'next/router';

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

function ScheduleList() {
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
        <div className='w-full text-white pt-4'>
            <div className='grid gap-3'>
                {
                    data.map((i, index) => (
                        <>
                            <div key={index} className='w-full border bg-[#212534] border-[#262938] p-3 sm:p-5 rounded-xl shadow-sm'>
                                <div className='flex justify-between items-center'>
                                    <h1 className="text-xl font-bold">{i.name}</h1>
                                    <div>
                                        <Menu placement="bottom-end">
                                            <MenuHandler>
                                                {/* {!(asPath === '/meeting') && } */}
                                                <Button size="sm" className="!text-grey-500 bg-[#272b39] border border-[#262938] text-xl shadow-md" variant="text"><BsThreeDots /></Button>
                                            </MenuHandler>
                                            <MenuList className='bg-[#272b39] shadow-sm border-transparent'>
                                                <MenuItem className='text-grey-400 hover:bg-[#242736] hover:text-grey-500 hover:shadow-md'>Copy Invitation Link</MenuItem>
                                                <MenuItem className='text-grey-400 hover:bg-[#242736] hover:text-grey-500 hover:shadow-md'>Edit</MenuItem>
                                                <MenuItem className='text-grey-400 hover:bg-[#242736] hover:text-grey-500 hover:shadow-md'>Delete</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </div>
                                </div>
                                <ul className="schedule-list-meta text-xs mt-2 text-grey-400 flex items-center gap-4">
                                    <li className='flex items-center gap-1'><MdOutlineWatchLater /> {i.time}</li>
                                    <li>start in {i.hours} hours</li>
                                </ul>
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
                                        <Button size="md" className="!text-grey-500 !px-3 bg-[#282c3a] mr-2 lowercase" variant="text">id</Button>
                                        {!(asPath === '/meeting') && <Button variant="filled" className='bg-[#0e78f9] text-xl sm:!px-4 !px-3 capitalize'>start</Button>}
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