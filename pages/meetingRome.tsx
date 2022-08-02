import Image from 'next/image'
import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import video1 from '../assets/video (2).jpg'
import video2 from '../assets/video (1).jpg'
import author from '../assets/author.jpg'
import author2 from '../assets/author2.jpg'
import user1 from '../assets/rohul.png'
import user2 from '../assets/shakib.jpg'
import { AiFillAudio, AiOutlineAudioMuted, AiOutlineVideoCamera, AiOutlineFile } from 'react-icons/ai';
import { BiVideoOff, BiMessageRoundedDots, BiRadioCircleMarked} from 'react-icons/bi';
import { MdKeyboardArrowUp} from 'react-icons/md';
import { BsEmojiSmile} from 'react-icons/bs';
import { RiUserSearchLine, RiComputerLine} from 'react-icons/ri';
import { Button } from '@material-tailwind/react';
import MassageAcccordion from '../components/MassageAcccordion'


function meetingRome() {


    const data = [
        {id: 1, name: 'Shakibul', img: user2,},
        {id: 2, name: 'Rohul amin ', img: user1,},
        {id: 3, name: 'Shakibul', img: user2,},
        {id: 4, name: 'Rohul amin', img: user1,},
    ]
    const video = [
        {img: video2, name: "Taniiya"},  {img: video1, name: "Shakil khan"},  {img: author2, name: "Moriom Akter"}
    ]

  return (
    <>
        <TopBar />
        <div className='w-full h-screen overscroll-y-auto pt-20'>
            <div className='text-white w-full flex justify-between'>
                <div className='w-full relative border-r border-grey-800'>
                    <div className='p-5'>
                        <div className='w-full pb-0 mb-2'>
                            <div className='w-full relative'>
                                <Image
                                    className='rounded-xl w-full mx-auto'
                                    src={author}
                                    alt="user"
                                    width={1080}
                                    height={640}
                                />
                                <div className='flex w-full items-center justify-between absolute bottom-2 left-0 p-4 '>
                                    <div className='flex items-center py-2 px-3 rounded-lg text-white bg-[#1a3254aa]'>
                                        <h3>Arifa Anjum</h3>
                                        <div className=' ml-2 w-[8px] h-[8px] rounded-full bg-[#10cf64]'></div>
                                    </div>
                                    <div className={`p-2 cursor-pointer rounded-lg text-white bg-[#1a3254aa]`}>
                                        <p className='text-xl'><AiFillAudio /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full gap-3 items-center justify-between'>
                            {
                                video.map(v => (
                                    <>
                                        <div className='w-full relative'>
                                            <Image
                                                className='rounded-xl w-full mx-auto'
                                                src={v.img}
                                                alt="user"
                                                // width={1080}
                                                // height={740}
                                            />
                                            <div className='flex w-full items-center justify-between absolute bottom-2 left-0 p-2'>
                                                <div className='flex items-center py-2 px-3 rounded-lg text-white bg-[#1a3254aa]'>
                                                    <h3>{v.name}</h3>
                                                    <div className=' ml-2 w-[8px] h-[8px] rounded-full bg-[#10cf64]'></div>
                                                </div>
                                                <div className={`p-2 cursor-pointer rounded-lg text-white bg-[#1a3254aa] bg-[#0f78f8]`}>
                                                    <p className='text-xl'>{<AiFillAudio />}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                    
                </div>
                <div className='w-1/2 p-5 relative'>
                    <div className='flex w-full mb-5 rounded-lg items-center justify-between bg-[#242634] p-1'>
                        <Button size="sm" className={`bg-[#2d303d] !text-grey-500 !px-3 w-full mr-4 capitalize`} variant="text">Upcoming</Button>
                        <Button  size="sm" className={`bg-[#2d303d] !text-grey-500 !px-3 w-full capitalize`} variant="text">Recorded</Button>
                    </div>
                    <div className='grid gap-y-2 pt-5 w-full border-t border-grey-800 '>
                        {
                            data.map(u => (
                                <>
                                    <div className='flex items-center justify-between w-full cursor-pointer text-grey-500 hover:text-white rounded-lg hover:bg-[#212534] p-1.5 gap-1'>
                                        <div className='flex items-center'>
                                        <Image
                                            className='rounded-lg w-full mx-auto'
                                            src={u.img}
                                            alt="user"
                                            width={36}
                                            height={40}
                                        />
                                        <p className='ml-2 text-sm'>{u.name}</p> 
                                        </div>
                                        <div className='flex items-center'>
                                            <p className={`text-xl cursor-pointer text-white`}>{<AiFillAudio />}</p>
                                            <p className='text-xl ml-2 cursor-pointer'>{<AiOutlineVideoCamera />}</p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    <div className='w-full mt-4'>
                    <MassageAcccordion data={data}  /> 
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div className='flex w-full items-center border-t border-grey-800'>
                <div className='flex border-r justify-between items-center w-full border-grey-800 px-3 py-7'>
                    <div className='flex items-center gap-3'>
                        <Button size="md" className="!text-grey-500 border border-[#2d303d] bg-[#212534] !px-2 capitalize flex items-center" variant="text">
                            <span className='mr-1 !text-2xl  text-[18px]'><AiFillAudio /></span>
                            <span className='text-[18px] !text-2xl -mr-1'><MdKeyboardArrowUp /></span>
                        </Button>
                        <Button size="md" className="!text-grey-500 border border-[#2d303d] bg-[#212534] !px-2 capitalize flex items-center" variant="text">
                            <span className='mr-1 !text-2xl  text-[18px]'><AiOutlineVideoCamera /></span>
                            <span className='text-[18px] !text-2xl -mr-1'><MdKeyboardArrowUp /></span>
                        </Button>
                        <Button size="md" className="!text-grey-500 border border-[#2d303d] bg-[#212534] !px-2 capitalize flex items-center" variant="text">
                            <span className='mr-1 !text-2xl  text-[18px]'><RiUserSearchLine /></span>
                            <span className='text-[18px] !text-2xl -mr-1'><MdKeyboardArrowUp /></span>
                        </Button>
                    </div>
                    <div>
                        <Button size="md" className="!text-white border border-[#2d303d] hover:bg-red-500 bg-red-500 !p-4 capitalize flex items-center" variant="text">End Meeting</Button>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Button size="md" className="!text-grey-500 border border-[#2d303d] bg-[#212534] !px-2 capitalize flex items-center" variant="text">
                            <span className='mr-1 !text-2xl  text-[18px]'><RiComputerLine /></span>
                            <span className='text-[18px] !text-2xl -mr-1'><MdKeyboardArrowUp /></span>
                        </Button>
                        <Button size="md" className="!text-grey-500 border border-[#2d303d] bg-[#212534] !px-2 capitalize flex items-center" variant="text">
                            <span className='mr-1 !text-2xl  text-[18px]'><BiRadioCircleMarked /></span>
                            <span className='text-[18px] !text-2xl -mr-1'><MdKeyboardArrowUp /></span>
                        </Button>
                        <Button size="md" className="!text-white border border-[#2d303d] hover:bg-[#0f78f8] bg-[#0f78f8] !px-2 capitalize flex items-center" variant="text">
                            <span className='mr-1 !text-2xl  text-[18px]'><BiMessageRoundedDots /></span>
                            <span className='text-[18px] !text-2xl -mr-1'><MdKeyboardArrowUp /></span>
                        </Button>
                    </div>
                </div>
                <div className='w-1/2 px-5 py-3'>
                    <div className='flex text-grey-500 items-center mb-6 justify-between'>
                        <div className='text-2xl flex gap-3'>
                            <span className='cursor-pointer'><AiOutlineFile /></span>
                            <span className='cursor-pointer'><AiOutlineFile /></span>
                            <span className='cursor-pointer'><AiFillAudio /></span>
                        </div>
                        <div className='text-2xl'>
                            <span className='cursor-pointer'><BsEmojiSmile /></span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <input className='!text-grey-500 border px-3 py-1 rounded-xl outline-0 border-[#2d303d] bg-[#212534]' type="text" name="" placeholder='Type Your massage' id="" />
                        <Button className='!capitalize' size="sm">Send</Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default meetingRome