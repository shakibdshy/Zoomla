/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react'
import { Button } from "@material-tailwind/react";
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineWatchLater } from 'react-icons/md'
import { BsPlusSquareFill } from 'react-icons/bs'
import { BiUserPin } from 'react-icons/bi'
import ScheduleList from '../Share/ScheduleList';
import author from "../assets/shakib.jpg"
import author2 from "../assets/rohul.png"
import ScheduleModul from '../Share/ScheduleModul';
import { UseStateContext } from '../context/UpcomingContext';
import SmNavbar from '../Share/SmNavbar';
import TopBar from '../Share/TopBar';
import Header from '../Share/Header';
import { useMantineColorScheme } from '@mantine/core';

function Meeting() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const [, setSelect] = useState(true)
    const [events] = UseStateContext();
    const [open, setOpen] = useState(false);
    const users = [author, author2, author, author2, author2, author, author2, author2, author, author2,]

    const data = {
        name: "Design Daily Zoomla Meeting",
        time1: "10:00",
        time2: "11:00",
        hours: "8",
        meetingId: "125 365 785"
    }
    const [user, setScheduleItem] = useState(events[0])

    useEffect(() => {
        if (events) {
            setScheduleItem(events[0])
        } else {
            setScheduleItem(data)
        }
    }, [])

    return (
        <>
            <div className={`body-container ${dark ? "bg-[#1c1f2e] theme-dark" : "bg-white theme-light"} relative pb-20 sm:pb-0 flex`}>
                <Header />
                <main className='w-full sm:w-[95%] sm:ml-[90px]'>
                    <TopBar />
                    <div className={` ${dark ? "bg-[#1c1f2e] border-[#262938] text-white" : "bg-[#fff] border-[#e8eaf5] text-[#000]"} flex h-screen pt-20 md:flex-nowrap flex-wrap`}>
                        <div className={`${dark ? "border-[#3f445d]" : "border-[#e8eaf5]"} w-full overflow-y-auto sm:max-h-screen max-h-[500px] md:border-r p-2 sm:p-4`}>
                            <div className={` ${dark ? "border-[#3f445d]" : "border-[#e8eaf5]"} flex !gap-x-3 border-b items-center py-4 pt-0 justify-between`}>
                                <Button onClick={() => setSelect(true)} size="md" className={` ${dark ? "bg-[#282c3a] text-gray-500" : "!bg-[#eff6ff] text-[#0e78f9]"} capitalize `} variant="text">Upcoming</Button>
                                <Button onClick={() => setOpen(!open)} size="md" className={`${dark ? "bg-[#282c3a] text-gray-500" : "!bg-[#eff6ff] text-[#0e78f9]"} capitalize !text-xl font-bold !px-2`} variant="text"><BsPlusSquare /></Button>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-xl font-bold pl-5 mt-5 mb-3'>Today</h1>
                                <ScheduleList setScheduleItem={setScheduleItem} />
                            </div>
                        </div>

                        <div className='w-full p-2 sm:p-4 lg:p-8'>
                            <div className='my-5'>
                                <h1 className='text-2xl font-bold'>{user?.name}</h1>
                                <div className={` ${dark ? 'text-gray-500' : 'text-gray-700'} text-xs mt-2 flex items-center`}>
                                    <span className="!mr-2"> <MdOutlineWatchLater /> </span>
                                    <span className="">{user?.time1}-{user?.time2}</span>
                                    <span className="mx-2">|</span>
                                    <span className="">start in {(user?.hours) ? user?.hours : '8'} hours</span>
                                </div>
                            </div>

                            <div className={` ${dark ? "border-[#3f445d]" : "border-[#e8eaf5]"} flex flex-wrap w-full items-center gap-3 border-y py-8`}>
                                <Button size="md" variant="filled" className='!px-4 capitalize'>start</Button>
                                <Button size="md" className={`${dark ? "bg-[#282c3a] text-gray-500" : "!bg-[#eff6ff] text-[#0e78f9]"} capitalize`} variant="text">Recorded</Button>
                                <Button size="md" className={`${dark ? "bg-[#282c3a] text-gray-500" : "!bg-[#eff6ff] text-[#0e78f9]"} capitalize px-3`} variant="text" >id</Button>
                            </div>

                            <div className='my-8'>
                                <p className={`text-sm ${dark ? 'text-gray-500' : 'text-gray-700'}`}>In tenetur maxime repudiandae, voluptates provident aperiam illum quasi accusamus natus minima suscipit. Iste suscipit repudiandae cumque velit.</p>
                            </div>

                            <div className={` ${dark ? 'text-gray-500 border-[#3f445d] m-0.5' : 'text-gray-700 border-[#e8eaf5]'}  my-5 border-y p-5 flex items-center justify-between`}>
                                <Button size="md" className={`${dark ? "bg-[#282c3a] text-gray-500" : "!bg-[#eff6ff] text-[#0e78f9]"} capitalize px-3`} variant="text">id</Button>
                                <div className='w-full text-center'>
                                    <div>
                                        <span className='text-sm text-gray-500'>meeting id</span>
                                        <h3 className='text-2xl font-bold'>{user?.meetingId}</h3>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center'>
                                    <span className='text-xl text-gray-500'><BiUserPin /></span>
                                    <p className='text-gray-500 ml-2 mb-2'>participants:</p>
                                </div>
                                <div className='grid grid-cols-2 sm:grid-cols-4 items-center mt-8 gap-4'>
                                    {
                                        users?.slice(0, 3).map((u, index) => (
                                            <div key={index}>
                                                <div className={` ${dark ? "bg-[#212534] border-[#262938] shadow-sm" : "zoomla-shadow-xl"} p-5 border rounded-xl text-center`}>
                                                    <div>
                                                        <img
                                                            className='rounded-lg w-[40px] h-[40px] mx-auto'
                                                            src={u}
                                                            alt="user"
                                                        />
                                                    </div>
                                                    <p className='mt-2 text-gray-500'>Shakib Al Hasan</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className={`${dark ? "bg-[#0e78f9] text-white" : "!bg-[#eff6ff] !text-[#0e78f9]"} p-5 rounded-xl duration-300`}>
                                        <div className='flex items-center justify-center'>
                                            <div className={` ${dark ? "bg-[#ffffff26] text-[#fff] border border-[#539ffa]" : "bg-[#c2ddff] !text-[#0e78f9]"} w-[40px] h-[38px] flex items-center justify-center text-center rounded-lg`}>
                                                <BsPlusSquareFill />
                                            </div>
                                        </div>
                                        <p className='text-center mt-1'>Invite Member</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ScheduleModul setOpen={setOpen} open={open} />
                </main>
                <div className='fixed sm:hidden left-0 bottom-0 w-full flex items-center justify-center border-gray-800 border-t'>
                    <SmNavbar />
                </div>
            </div>
        </>

    )
}

export default Meeting