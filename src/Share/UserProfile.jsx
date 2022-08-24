/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import post1 from '../assets/zoompost.jpg'
// import author1 from '../assets/rohul.png'
import { Button } from '@material-tailwind/react';
import { FiEdit } from 'react-icons/fi';
import UpdateProfileModal from './UpdateProfileModal';
import { UseFeedContext, UseStoryContext, UseUserContext } from '../context/UpcommingContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import FeedCard from './FeedCard';
// import { Button } from '@material-tailwind/react';

const UserProfile = () => {
    const [currentUser] = UseUserContext();
    const [updateOpen, setUpdateOpen] = useState(false);
    const [Feeds] = UseFeedContext();
    const [story] = UseStoryContext();
    const myPost = Feeds?.map(p => p?.email?.includes(currentUser?.email));

    return (
        <div className='p-5'>
            <div className="border bg-[#212534] border-[#262938] text-white w-full rounded-xl p-0">
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
                                        <h1 className="text-5xl uppercase text-white font-bold">
                                            {currentUser?.name.slice(0, 2)}
                                        </h1>
                                    </div>
                                )}
                                <div className='ml-3 !pt-[60px]'>
                                    <h1 className='text-3xl capitalize font-bold text-gray-300'>{currentUser?.name}</h1>
                                    <h1 className='text-gray-400 text-xl font-bold'>{currentUser?.address}</h1>
                                </div>
                            </div>
                            <div className='ml-3 !pt-10 w-full flex justify-end pr-[50px] items-center'>
                                <Button
                                    size="md"
                                    onClick={() => setUpdateOpen(!updateOpen)}
                                    className="!text-gray-500 bg-[#272b39] border border-[#262938] text-xl shadow-md"
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
                <div className="w-full flex justify-between gap-2 sm:gap-3 mt-3 items-center">
                    <div className="text-center w-full bg-[#262938] rounded-md p-2">
                        <h1 className='text-xl font-bold text-green-800'>{myPost?.length}</h1>
                        <span className='text-xs sm:text-sm text-gray-400 font-bold'>Posts</span>
                    </div>
                    <div className="text-center w-full bg-[#262938] rounded-md p-2">
                        <h1 className='text-xl font-bold text-green-800'>12k</h1>
                        <span className='text-xs sm:text-sm text-gray-400 font-bold'>Flowers</span>
                    </div>
                    <div className="text-center w-full bg-[#262938] rounded-md p-2">
                        <h1 className='text-xl font-bold text-green-800'>{story.length}+</h1>
                        <span className='text-xs sm:text-sm text-gray-400 font-bold'>Stories</span>
                    </div>
                </div>
            </div>
            <div className='w-full mt-4'>
                <h1 className='text-3xl mb-3 font-bold text-white'>Feeds</h1>
                <FeedCard />
            </div>
            <UpdateProfileModal open={updateOpen} setUpdateOpen={setUpdateOpen} />
        </div>
    );
};

export default UserProfile;