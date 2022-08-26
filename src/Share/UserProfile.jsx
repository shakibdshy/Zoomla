/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import post1 from '../assets/zoomlapost.jpg'
import { Button } from '@material-tailwind/react';
import { FiEdit } from 'react-icons/fi';
import UpdateProfileModal from './UpdateProfileModal';
import { UseFeedContext, UseStoryContext, UseUserContext } from '../context/UpcommingContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import FeedCard from './FeedCard';
import { useMantineColorScheme } from '@mantine/core';

const UserProfile = () => {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const [currentUser] = UseUserContext();
    const [user] = useAuthState(auth);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [Feeds] = UseFeedContext();
    const [story] = UseStoryContext();
    const myPost = Feeds?.filter(p => p?.email?.includes(user?.email));
    const myStory = story?.filter(p => p?.email?.includes(user?.email));

    return (
        <div className='p-5'>
            <div className={` ${dark ? "bg-[#212534] border-[#262938] text-white" : "bg-[#f1f1f4] border-[#e8eaf5] text-[#000]"} border w-full rounded-xl p-0`}>
                <div className="flex justify-between items-center ">
                    <div className='rounded-2xl relative w-full h-[300px]'>
                        <img src={post1} className="rounded-t-2xl w-full h-[300px]" alt="cover phot" />
                        <div className='absolute flex justify-between items-center left-[50px] w-full bottom-[-80px]'>
                            <div className='flex w-full items-center'>
                                {currentUser?.img && <div className='!w-[150px] h-[150px] bg-[#262938] rounded-full ring-[4px] cursor-pointer ring-offset-[3px] ring-[#2481d1]'>
                                    <img src={currentUser?.img} className="w-[150px] h-[150px] rounded-full" alt="user" />
                                </div>}
                                {!(currentUser?.img) && (
                                    <div className="w-[150px] h-[150px] ring-2 cursor-pointer ring-offset-2 ring-blue-800 rounded-full bg-blue-600 flex items-center justify-center">
                                        <h1 className="text-5xl uppercase font-bold">
                                            {currentUser?.name.slice(0, 2)}
                                        </h1>
                                    </div>
                                )}
                                <div className='ml-3 !pt-[60px]'>
                                    <h1 className='text-3xl capitalize font-bold'>{currentUser?.name}</h1>
                                    <h1 className='text-xl font-bold'>{currentUser?.address}</h1>
                                </div>
                            </div>
                            <div className='ml-3 !pt-10 w-full flex justify-end pr-[60px] items-center'>
                                <Button
                                    size="sm"
                                    onClick={() => setUpdateOpen(!updateOpen)}
                                    className="bg-gradient-to-r from-[#2091d9] to-[#13b38f] text-white text-xl shadow-md"
                                    variant="text"
                                >
                                    <FiEdit />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-28 pl-4">
                    <span className='text-xs block text-gray-500 l-height sm:text-sm'>{currentUser?.bio}</span>
                </div>
                <div className="w-full flex justify-between p-[10px] gap-2 sm:gap-3 mt-3 items-center">
                    <div className="text-center w-full bg-[#2091d9] text-white shadow-sm rounded-md p-2">
                        <h1 className='text-xl font-bold '>{myPost?.length}</h1>
                        <span className='text-xs sm:text-sm font-bold'>Posts</span>
                    </div>
                    <div className="text-center w-full bg-[#13b38f] text-white shadow-sm rounded-md p-2">
                        <h1 className='text-xl font-bold'>12k</h1>
                        <span className='text-xs sm:text-sm font-bold'>Flowers</span>
                    </div>
                    <div className="text-center w-full bg-[#ae13b3] text-white shadow-sm rounded-md p-2">
                        <h1 className='text-xl font-bold'>{myStory.length}+</h1>
                        <span className='text-xs sm:text-sm font-bold'>Stories</span>
                    </div>
                </div>
            </div>
            <div className='w-full mt-4'>
                <h1 className='text-3xl mb-3 font-bold text-white'>Feeds</h1>
                {myPost && <FeedCard FeedPosts={myPost} />}
            </div>
            <UpdateProfileModal open={updateOpen} setUpdateOpen={setUpdateOpen} />
        </div>
    );
};

export default UserProfile;