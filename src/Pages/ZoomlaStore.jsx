/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Header from '../Share/Header';
import SmNavbar from '../Share/SmNavbar';
import StoreiTopBar from '../Share/StoreiTopbar';
import author from "../assets/shakib.jpg";
import author2 from "../assets/rohul.png";
import FeedCard from '../Share/FeedCard';
import Profile from '../Share/Profile';
import { Button } from '@material-tailwind/react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import CreatePostModal from '../Share/CreatePostModal';
import UserProfile from '../Share/UserProfile';
import { useMantineColorScheme } from '@mantine/core';

const ZoomlaStore = () => {
    const [postOpen, setPostOpen] = useState(false);
    const [profile, setProfile] = useState(true);
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const user = [
        { img: author, name: "Shakib" },
        { img: author2, name: "Rohul Amin" },
        { img: author, name: "Shakib" },
        { img: author2, name: "Rohul Amin" },
        { img: author, name: "Shakib" },
        { img: author2, name: "Rohul Amin" },
        { img: author, name: "Shakib" },
        { img: author2, name: "Rohul Amin" },
        { img: author, name: "Shakib" },
    ];
    return (
        <>
            <div className={`body-container w-full ${dark ? "bg-[#1c1f2e]" : "bg-white"} relative sm:pb-0 flex`}>
                <Header />
                <main className={`w-full relative sm:w-[95%] sm:ml-[90px] ${dark ? "bg-[#1c1f2e]" : "bg-white"} h-screen`}>
                    <section className={`p-4 px-6 ${dark ? "bg-[#1c1f2e] border-gray-800" : "bg-white border-gray-300"} border-b z-10  pl-28 fixed top-0 left-0 w-full`}>
                        <StoreiTopBar open={postOpen} setPostOpen={setPostOpen} />
                    </section>
                    <section className='pt-[80px] px-4 mr-[350px]'>
                        <div className='pt-2 pr-4 mx-auto overflow-y-auto w-full'>
                            {/* story section */}
                            <h1 className='text-2xl mb-3 font-bold text-white'>Story</h1>
                            <div className='flex items-center w-full overflow-x-auto py-2'>
                                <div className='mr-5'>
                                    <div className='w-[80px] h-[80px] mx-auto relative rounded-full cursor-pointer'>
                                        <img src={author} alt="user" className='w-full rounded-full overflow-hidden' />
                                        <div className='absolute w-[30px] h-[30px] right-[-5px] p-1 flex items-center justify-center text-white text-2xl font-bold rounded-full bg-[#8e44ad] bottom-[4px]'>
                                            <span className='mt-[-5px]'>+</span>
                                        </div>
                                    </div>
                                    <p className='text-white mt-3'>Your Story</p>
                                </div>
                                <div className='flex gap-x-8'>
                                    {
                                        user.map(u => (
                                            <>
                                                <div className='text-center'>
                                                    <div className='w-[80px] mx-auto h-[80px] !bg-[#1c1f2e] rounded-full ring-[4px] cursor-pointer ring-offset-[3px] ring-[#8e44ad]'>
                                                        <img src={u.img} alt="user" className='w-[80px] mx-auto h-[80px] rounded-full overflow-hidden' />
                                                    </div>
                                                    <p className='text-white mt-3'>{u.name.slice(0, 5)}</p>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* Feed section */}
                            <div className='w-full mt-3'>
                                <h1 className='text-3xl mb-3 font-bold text-white'>{profile ? 'Feed' : "My Profile"}</h1>
                                {profile ? <FeedCard /> : <UserProfile />}
                            </div>
                        </div>
                        <div className='pt-4 !w-[340px] border-l border-gray-800 text-white fixed top-20 right-0'>
                            <div className='px-3 w-full'>
                                <Profile profile={profile} setProfile={setProfile} />
                                <div className='mt-8'>
                                    <h3 className='text-white text-xl font-bold'>Your Stories</h3>
                                    <div className='flex flex-wrap gap-5 mt-5'>
                                        {
                                            user.slice(0, 5).map(u => (
                                                <>
                                                    <div className='text-center'>
                                                        <div className='w-[50px] mx-auto h-[50px] !bg-[#1c1f2e] rounded-full ring-[2px] cursor-pointer ring-offset-[2px] ring-[#8e44ad]'>
                                                            <img src={u.img} alt="user" className='w-[50px] mx-auto h-[50px] rounded-full overflow-hidden' />
                                                        </div>
                                                        <p className='text-white mt-3'>{u.name.slice(0, 5)}</p>
                                                    </div>
                                                </>
                                            ))
                                        }
                                        <div className='text-center'>
                                            <div className='w-[50px] flex items-center justify-center mx-auto h-[50px] !bg-[#1c1f2e] rounded-full ring-[2px] cursor-pointer ring-[#8e44ad]'>
                                                <span className='text-2xl font-bold text-[#8e44ad]'><AiOutlinePlayCircle /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-8'>
                                    <Button size="md" onClick={() => setPostOpen(!postOpen)} className="!text-white text-center w-full hover:bg-[#8e44ad] rounded-[24px] text-[16px] bg-[#8e44ad] !px-4 capitalize flex items-center" variant="text">Create Post</Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <div className='fixed sm:hidden left-0 bottom-0 w-full flex items-center justify-center border-gray-800 border-t'>
                    <SmNavbar />
                </div>
            </div>
            <CreatePostModal open={postOpen} setPostOpen={setPostOpen} />
        </>
    );
};

export default ZoomlaStore;