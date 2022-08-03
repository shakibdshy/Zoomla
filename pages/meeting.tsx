
import React, { useEffect, useState } from 'react'
import { Button } from "@material-tailwind/react";
import TopBar from '../components/TopBar';
import { AiOutlineReload } from 'react-icons/ai'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineWatchLater } from 'react-icons/md'
import { BsPlusSquareFill } from 'react-icons/bs'
import { BiUserPin } from 'react-icons/bi'
import ScheduleList from '../components/ScheduleList';
import Image from 'next/image';
import author from "../assets/shakib.jpg"
import author2 from "../assets/rohul.png"

function Meeting() {
  const [select, setSelect] = useState(true)

  const data: { name: string, time: string, hours: string, user: any[] } = {
    name: "Design Daily Zoomla Meeting",
    time: "10:00-11:00",
    hours: "8",
    user: [author, author2, author, author2, author2, author, author2, author2, author, author2,]
  }
  const [user, setUser] = useState(data)

  useEffect(() => {
    setUser(data)
  }, [])

  return (
    <>
      <TopBar />
      <div className='text-white flex h-screen pt-20 md:flex-nowrap flex-wrap'>
        <div className='w-full overflow-y-auto sm:max-h-screen max-h-[500px] md:border-r p-2 sm:p-4 border-grey-800'>
          <div className='flex !gap-x-3 border-b border-grey-800  items-center py-4 pt-0 justify-between'>
            <Button size="sm" className="!text-grey-500 !text-xl font-bold !px-2 bg-[#212534] border border-[#4d4c4c] lowercase" variant="text"><AiOutlineReload /></Button>
            <div className='flex w-full lg:w-1/2 rounded-lg items-center justify-between bg-[#2b2a2a] p-1'>
              <Button onClick={() => setSelect(true)} size="sm" className={`${select && "border bg-[#3d3c3c] border-[#4d4c4c]"} !text-grey-500 !px-3 w-full mr-4 bg-[#2f2e2e]  capitalize`} variant="text">Upcoming</Button>
              <Button onClick={() => setSelect(false)} size="sm" className={`${!select && "border bg-[#3d3c3c] border-[#4d4c4c]"} !text-grey-500 !px-3 w-full bg-[#2f2e2e]  capitalize`} variant="text">Recorded</Button>
            </div>
            <Button size="sm" className="!text-grey-500 !text-xl font-bold !px-2 bg-[#282c3a] border border-[#4d4c4c] lowercase" variant="text"><BsPlusSquare /></Button>
          </div>
          <div className='w-full'>
            <h1 className='text-xl font-bold pl-5 mt-5 mb-3'>Today</h1>
            <ScheduleList />
          </div>
        </div>

        <div className='w-full text-white p-2 sm:p-4 lg:p-8'>
          <div className='my-5'>
            <h1 className='text-2xl font-bold'>{user.name}</h1>
            <div className="text-xs mt-2 text-grey-400 flex items-center">
              <span className="!mr-2"> <MdOutlineWatchLater /> </span>
              <span className=""> {user?.time}</span>
              <span className="mx-2">|</span>
              <span className="">start in {user?.hours} hours</span>
            </div>
          </div>

          <div className='flex flex-wrap w-full items-center gap-3 border-y border-grey-800 py-8 '>
            <Button size="md" variant="filled" className={`!px-4 capitalize`}>start</Button>
            <Button size="md" className="!text-grey-500 !px-4 border bg-[#212534] border-grey-800 capitalize" variant="text">Recorded</Button>
            <Button size="md" className="!text-grey-500 !px-4 border bg-[#212534] border-grey-800 capitalize" variant="text">Recorded</Button>
            <Button size="md" className="!text-grey-500 !px-3 border bg-[#212534] border-grey-800  capitalize" variant="text">id</Button>
            <Button size="md" className="!text-grey-500 !px-3 border bg-[#212534] border-grey-800  capitalize" variant="text">id</Button>
          </div>

          <div className='my-8'>
            <p className='text-sm !text-grey-500'>In tenetur maxime repudiandae, voluptates provident aperiam illum quasi accusamus natus minima suscipit. Iste suscipit repudiandae cumque velit.</p>
          </div>

          <div className='my-5 border-y p-5 flex items-center justify-between border-grey-800'>
            <Button size="md" className={`!text-grey-500 !px-3 border bg-[#282c3a] border-[#4d4c4c]  capitalize`} variant="text">id</Button>
            <div className='w-full text-center'>
              <div>
                <span className='text-sm text-grey-500'>meeting id</span>
                <h3 className='text-2xl font-bold'>123 648 1252</h3>
              </div>
            </div>
          </div>

          <div>
            <div className='flex items-center'>
              <span className='text-xl text-grey-500'><BiUserPin /></span>
              <p className='text-grey-500 ml-2 mb-2'>participants:</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 items-center mt-8 gap-4'>
              {
                user?.user?.slice(0, 3).map((u, index) => (
                  <>
                    <div key={index} className='p-5 border rounded-xl text-center bg-[#212534] border-grey-800'>
                      <div>
                        <Image
                          className='rounded-lg w-full mx-auto'
                          src={u}
                          alt="user"
                          width={36}
                          height={40}
                        />
                      </div>
                      <p className='text-grey-500'>Shakib Al Hasan</p>
                    </div>
                  </>
                ))
              }
              <div className='p-5 border rounded-xl text-center bg-[#0e78f9] border-grey-800'>
                <div className='flex items-center justify-center'>
                  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }} className='w-[40px] h-[38px] flex items-center justify-center border border-[#539ffa] rounded-lg '>
                    <BsPlusSquareFill />
                  </div>
                </div>
                <p className='text-white mt-1'>Invite Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Meeting