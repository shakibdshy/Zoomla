import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import Accordion from '../components/Accordions'
import TopBar from '../components/TopBar'
import { BsPlusSquare, BsTelephone } from 'react-icons/bs'
import { MdOutlineDelete, MdOutlineWatchLater, MdOutlineWorkOutline } from 'react-icons/md'
import { BiVideo, BiMessageRoundedDots } from 'react-icons/bi'
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineHome } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import author from "../assets/shakib.jpg"
import author2 from "../assets/rohul.png"
import Image from 'next/image'


function Contact() {
  const [select, setSelect] = useState(true)

  let contactsUser = {
    name: 'cloud contacts',
    user: [
      { name: "Shakib hasan", img: author, },
      { name: "Rohul amin", img: author2, },
      { name: "Shakib hasan", img: author, },
    ]
  }

  let contactsUser1 = {
    name: 'starred',
    user: [
      { name: "Shakib hasan", img: author, },
      { name: "Rohul amin", img: author2, },
      { name: "Shakib hasan", img: author, },
      { name: "Rohul amin", img: author2, },
    ]
  }

  let contactsUser2 = {
    name: 'External',
    user: [
      { name: "Rohul amin", img: author2, },
      { name: "Shakib hasan", img: author, },
      { name: "Rohul amin", img: author2, },
    ]
  }

  const contactInfo = [
    { name: "Home", title: '012 123 4562', icons: <AiOutlineHome /> },
    { name: "Work", title: '012 123 4562', icons: <MdOutlineWorkOutline /> },
    { name: "Location", title: 'Los Angeles USA', icons: <GoLocation /> },
    { name: "Time Zone", title: '-10h, GMT', icons: <MdOutlineWatchLater /> },
  ]

  return (
    <>
      <TopBar />
      <div className='text-white pt-20 h-screen flex md:flex-nowrap flex-wrap'>
        <div className='w-full overflow-y-auto p-5 sm:border-r border-grey-800'>
          <div className='flex border-b border-grey-800  items-center p-4 pl-0 pt-0  justify-between'>
            <div className='flex w-full lg:w-1/2 rounded-lg items-center justify-between bg-[#212534] p-1'>
              <Button onClick={() => setSelect(true)} size="sm" className={`${select && "border bg-[#252a3d] border-[#4d4c4c]"} !text-grey-500 !px-3 w-full mr-4 bg-[#282d3f]  capitalize`} variant="text">Contacts</Button>
              <Button onClick={() => setSelect(false)} size="sm" className={`${!select && "border bg-[#252a3d] border-[#4d4c4c]"} !text-grey-500 !px-3 w-full bg-[#282d3f]  capitalize`} variant="text">Channels</Button>
            </div>
            <Button size="sm" className="!text-grey-500 !text-xl font-bold !px-2 bg-[#282c3a] border border-[#4d4c4c] lowercase" variant="text"><BsPlusSquare /></Button>
          </div>

          <div className='mt-5'>
            <h1 className='text-xl font-bold'>My Contacts</h1>
            <div className='mt-5 grid gap-y-3'>
              <Accordion contactsUser={contactsUser1} />
              <Accordion contactsUser={contactsUser2} />
              <Accordion contactsUser={contactsUser} />
            </div>
          </div>

          <div className='mt-5'>
            <h1 className='text-xl font-bold'>Company Directory</h1>
            <div className='mt-5 grid gap-y-3'>
              <Accordion contactsUser={contactsUser} />
              <Accordion contactsUser={contactsUser} />
            </div>
          </div>
        </div>

        <div className='w-full p-4 sm:p-6  lg:p-8'>
          <div className='bg-[#212534] p-5 rounded-2xl w-full border border-grey-800 '>
            <div className='flex mb-5 items-center'>
              <div>
                <Image
                  className='rounded-lg w-full mx-auto'
                  src={author2}
                  alt="user"
                  width={80}
                  height={80}
                />
              </div>
              <div className='ml-5'>
                <h1 className='text-3xl font-bold text-white'>Roul amin</h1>
                <span className='text-grey-500 mt-3 font-xs'>added forms google contacts</span>
              </div>
            </div>

            <div className='flex w-full flex-wrap sm:flex-nowrap items-center gap-3 border-y border-grey-800 py-8 sm:justify-center'>
              <Button size="md" className="!text-grey-500 border bg-[#282c3a] border-grey-800 !px-4 capitalize flex items-center" variant="text"><span className='mr-2 text-[18px]'><BsTelephone /></span> call</Button>
              <Button size="md" className="!text-grey-500 border bg-[#282c3a] border-grey-800 !px-4 capitalize flex items-center" variant="text"><span className='mr-2 text-[18px]'><BiVideo /></span> videocall</Button>
              <Button size="md" className="!text-grey-500 border bg-[#282c3a] border-grey-800 !px-4 capitalize flex items-center" variant="text"><span className='mr-2 text-[18px]'><BiMessageRoundedDots /></span> Massage</Button>
              <Button size="md" className="!text-grey-500 border bg-[#282c3a] border-grey-800 !p-3 font-bold text-[14px] capitalize" variant="text"><FiEdit2 /></Button>
              <Button size="md" className="!text-grey-500 border bg-[#282c3a] border-grey-800 !p-3 font-bold text-[14px] capitalize" variant="text"><MdOutlineDelete /></Button>
            </div>

            <div className='mt-12'>
              <h1 className='my-8 font-bold'>Contacts info</h1>
              <div className='grid grid-cols-2 border-y py-6 mb-10 mt-6 border-grey-800 gap-y-10'>
                {
                  contactInfo.map(i => (
                    <>
                      <div className='flex items-center'>
                        <Button size="lg" className="!text-grey-500 border bg-[#282c3a] border-grey-800 !p-3 font-bold text-[16px] capitalize" variant="text">{i.icons}</Button>
                        <div className='ml-2'>
                          <p className='text-grey-500 text-[14px] !mt-1'>{i.name}</p>
                          <span className='text-white !text-[16px]'>{i.title}</span>
                        </div>
                      </div>
                    </>
                  ))
                }
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Contact