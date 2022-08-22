/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import React from 'react';
import post1 from '../assets/zoompost.jpg'
import { Button } from '@material-tailwind/react';
import { UseUserContext } from '../context/UpcommingContext';
const Profile = ({ setProfile, profile }) => {
    const [currentUser] = UseUserContext();
    return (
        <div className='border w-full bg-[#212534] pb-3 border-[#262938] rounded-2xl'>
            <div className='rounded-2xl relative w-full h-[140px]'>
                <img src={post1} className="rounded-t-2xl w-full h-[140px]" alt="cover phot" />
                {currentUser?.img && <div className='w-[60px] h-[60px] absolute left-[50%] translate-x-[-50%] bottom-[-20px] rounded-full ring-[4px] cursor-pointer ring-offset-[3px] ring-blue-600'>
                    <img src={currentUser?.img} className="w-[60px] h-[60px] rounded-full" alt="user" />
                </div>}
                {!(currentUser?.img) && <div className='w-[60px] h-[60px] bg-blue-500 absolute left-[50%] translate-x-[-50%] bottom-[-20px] rounded-full ring-[4px] cursor-pointer ring-offset-[3px] ring-blue-700 flex items-center justify-center'>
                    <h1 className="text-4xl uppercase text-white font-bold">
                        {currentUser?.name.slice(0, 2)}
                    </h1>
                </div>}
            </div>
            <div className='mt-8 text-white text-center'>
                <h1 className='font-bold text-xl'>{currentUser?.name}</h1>
                <h5 className='text-sm'>{currentUser?.address}</h5>
            </div>
            <div className='w-full px-3 my-4 text-gray-500 flex justify-between items-center'>
                <div className='border-r w-full text-center border-gray-800'>
                    <h1 className='text-sm'>Posts</h1>
                    <h1 className='text-blue-700'>38+</h1>
                </div>
                <div className='w-full text-center'>
                    <h1 className='text-sm'>Story</h1>
                    <h1 className='text-blue-700'>26+</h1>
                </div>
            </div>
            <div className='px-4 flex justify-center'>
                <Button onClick={() => setProfile(!profile)} size="md" className={`${profile ? "hover:bg-[#8e44ad] bg-[#8e44ad]" : "bg-blue-500 hover:bg-blue-500"} !text-white !text-center rounded-[10px] text-[16px] capitalize flex items-center`} variant="text">{profile ? 'My Profile' : "Feeds"}</Button>
            </div>
        </div>
    );
};

export default Profile;