/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { FcLike } from 'react-icons/fc';
import { TbMessageDots } from 'react-icons/tb';
import { format } from 'date-fns';
import { UseFeedContext } from '../context/UpcommingContext';
import DeletingModal from './DeletingModal';
import { FaRegPaperPlane } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';


const FeedCard = () => {
    const [Feeds] = UseFeedContext()
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [event, setEvent] = useState({});
    const method = 'feedPost'

    const handleOpen = (p) => {
        if (p) {
            setDeleteOpen(!deleteOpen);
            setEvent(p)
        }
    }

    return (
        <div className='w-full gap-4 feed-card'>
            {
                Feeds.map(p => (
                    <>
                        <div className='rounded-[24px] text-white border bg-[#212534] border-[#262938] p-1'>
                            <div className='flex justify-between items-center px-2 mt-1'>
                                <div className='flex items-center'>
                                    {p?.name && (
                                        <div className="w-[26px] h-[36] ring-2 cursor-pointer ring-offset-2 ring-blue-800 rounded-full bg-blue-600 flex items-center justify-center">
                                            <h1 className="text-xl text-white font-bold">
                                                {p?.name.slice(0, 1)}
                                            </h1>
                                        </div>
                                    )}
                                    {/* <img src={p.uImg} alt="user" className='rounded-full w-[36px] h-[36px]' /> */}
                                    <div className='ml-2'>
                                        <h4 className='capitalize mb-[-2px]'>{p.name}</h4>
                                        <small className='text-xm block text-gray-500 mt-[-3px]'>{p.email}</small>
                                    </div>
                                </div>
                                <Menu placement="bottom-end">
                                    <MenuHandler>
                                        <Button
                                            size="sm"
                                            className="!text-gray-500 bg-none text-xl"
                                            variant="text"
                                        >
                                            <BsThreeDots />
                                        </Button>
                                    </MenuHandler>
                                    <MenuList className="bg-[#272b39] shadow-sm border-transparent">
                                        <MenuItem className="text-gray-400 hover:bg-[#242736] hover:text-gray-500 hover:shadow-md">
                                            Edit
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => handleOpen(p)}
                                            className="text-gray-400 hover:bg-[#242736] hover:text-gray-500 hover:shadow-md"
                                        >
                                            Delete
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>

                            <div className='w-full rounded-2xl my-2'>
                                <img src={p.img} className='w-full rounded-2xl' alt="post img" />
                            </div>

                            <div className='flex items-center justify-between px-2'>
                                <ul className='flex items-center gap-x-3'>
                                    <li className="text-gray-400 text-[20px] cursor-pointer">
                                        <span><FcLike /></span>
                                    </li>
                                    <li className="text-gray-400 text-[20px] cursor-pointer">
                                        <span><TbMessageDots /></span>
                                    </li>
                                    <li className="text-gray-400 text-[20px] cursor-pointer">
                                        <span><FaRegPaperPlane /></span>
                                    </li>
                                </ul>
                                <div>
                                    <div className="text-gray-400 text-[20px] cursor-pointer">
                                        <span><FiBookmark /></span>
                                    </div>
                                </div>
                            </div>

                            <div className='px-2  my-2'>
                                <div className='flex items-center justify-between '>
                                    <p className='text-gray-500 text-sm'>Liked by Rohul and 360 others</p>
                                </div>
                                <small className='text-xs text-gray-500'>{format(new Date(p?.date), 'PP')}</small>
                            </div>
                        </div>
                        <DeletingModal
                            setDeleteOpen={setDeleteOpen}
                            event={event}
                            method={method}
                            open={deleteOpen}
                        />
                    </>
                ))
            }
        </div>
    );
};

export default FeedCard;