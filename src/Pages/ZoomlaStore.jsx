/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Header from '../Shared/Header';
import SmNavbar from '../Shared/SmNavbar';
import StorieTopBar from '../Shared/StorieTopbar';
import { motion } from "framer-motion"
import FeedCard from '../Shared/FeedCard';
import Profile from '../Shared/Profile';
import { Button } from '@material-tailwind/react';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import CreatePostModal from '../Shared/CreatePostModal';
import UserProfile from '../Shared/UserProfile';
import Story from '../Shared/Storys';
import StoryShow from '../Shared/StoryShowModal';
import { UseFeedContext, UseStoryContext, UseUserContext } from '../context/UpcomingContext';
import OpenStoryModal from '../Shared/OpenStoryModal';
import { useRef } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useMantineColorScheme } from '@mantine/core';


const ZoomlaStore = () => {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const [Feeds] = UseFeedContext();
    const [open, setOpen] = useState(true);
    const [show, setShow] = useState(false);
    const [currentUser] = UseUserContext();
    const [story] = UseStoryContext();
    const [postOpen, setPostOpen] = useState(false);
    const [openStory, setOpenStory] = useState(false);
    const [StoryOpen, setStoryOpen] = useState(false)
    const [stories, setStories] = useState([])
    const [profile, setProfile] = useState(true);
    const [image, setImage] = useState();
    const [img, setImg] = useState()
    const imageRef = useRef();

    const myStory = story?.filter(s => s?.email?.includes(currentUser?.email))

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImg(img)
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }

    const setImgUrl = () => {
        imageRef.current.click();
        setOpenStory(!openStory);
    }

    const storyShow = (s) => {
        setStoryOpen(!StoryOpen);
        setStories(s);
    }

    return (
        <>
            <div className={`body-container ${dark ? "bg-[#1c1f2e] theme-dark" : "bg-white theme-light"} relative pb-20 sm:pb-0 flex`}>
                <Header />
                <main className='w-full relative sm:w-[95%] sm:ml-[90px]'>
                    <section className={`p-4 px-6 ${dark ? "bg-[#212534] border-[#3f445d] text-white" : "bg-white border-[#eff2fb] text-[#000]"} zoomla-blur border-b z-10 pl-28 fixed top-0 left-0 w-full`}>
                        <StorieTopBar dark={dark} open={postOpen} setPostOpen={setPostOpen} />
                    </section>
                    <section className='flex px-4'>
                        <div className='pr-4 mx-auto w-full h-screen overflow-x-auto pt-[80px]'>
                            {/* story section */}
                            {/* <h1 className={`${profile ? 'block' : "hidden"} text-2xl mb-3 font-bold`}>Story</h1> */}
                            <div className={`${!profile ? 'hidden' : ""} flex items-center mt-3 w-full pb-2`}>
                                <div className='mr-2 lg:mr-5'>
                                    <div className={`${!(currentUser?.img) && "ring-[4px] bg-[#506ed1] flex items-center ml-2 justify-center ring-offset-[3px] ring-[#506ed1]"} xl:w-[80px] xl:h-[80px] lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] mt-2 mx-auto relative rounded-full cursor-pointer`}>
                                        {currentUser?.img && <img src={currentUser.img} alt="user" className='w-full rounded-full overflow-hidden' />}
                                        {!(currentUser?.img) &&
                                            <h1 className="text-3xl sm:text-4px uppercase text-white font-bold">
                                                {currentUser?.name.slice(0, 2)}
                                            </h1>
                                        }
                                        <div onClick={() => setImgUrl()} className='absolute w-[24px] h-[24px] md:w-[30px] md:h-[30px] right-[-5px] p-1 flex items-center justify-center text-white text-xl md:text-2xl font-bold rounded-full bg-[#8e44ad] bottom-[4px]'>
                                            <span className='mt-[-5px]'>+</span>
                                            <div style={{ display: 'none' }} className="hidden">
                                                <input type="file" name="images" onChange={onImageChange} ref={imageRef} id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='mt-3'>Story</p>
                                </div>
                                <Story storyShow={storyShow} />
                            </div>
                            {/* Feed section */}
                            <div className='w-full mt-3'>
                                <div className='flex items-center mb-3'>
                                    <h1 className={`text-2xl inline-block px-5 py-1 pb-2 rounded-3xl bg-gradient-to-r from-[#2091d9] to-[#13b38f] text-white font-bold ${!profile ? 'text-xl w-[200px]' : ''}  `}>
                                        <span className='w-full'>{profile ? 'Feed' : "Profile"}</span>
                                    </h1>
                                    <div className='w-full -ml-2 h-[3px] rounded-sm bg-[#13b38f]'></div>
                                </div>
                                {profile ? <FeedCard FeedPosts={Feeds} /> : <UserProfile />}
                            </div>
                        </div>
                        <motion.div
                            animate={{
                                width: !open ? '0px' : '320px',
                                transition: {
                                    duration: 0.5,
                                    type: 'spring',
                                    damping: 10,
                                }
                            }}
                            className={`${!show ? 'block' : 'hidden'} pt-[80px] ${dark ? "bg-[#1c1f2e] border-[#3f445d] text-white" : "bg-white zoomla-border-clr-light text-[#000]"} sm:relative fixed top-0 right-0 border-l h-screen border-[#3f445d] text-white`}>
                            <div className='relative sm:static'>
                                <div onClick={() => setOpen(!open)} className={`${!open ? "-left-[36px]" : "-left-[18px] rotate-180"} z-50 absolute cursor-pointer p-1 border-gray-700 border-2 rounded-full text-white font-bold -top-1 sm:top-16 bg-gradient-to-r from-cyan-500 to-blue-500`}> <FaChevronLeft /> </div>
                                <div className={`${open ? 'block' : 'hidden'} px-3 pt-4 w-full`}>
                                    <Profile profile={profile} setProfile={setProfile} />
                                    <div className='mt-8'>
                                        <h3 className='text-xl font-bold'>My Stories</h3>
                                        <div className='flex flex-wrap gap-5 justify-between mt-5'>
                                            {
                                                myStory.slice(0, 5).map((u, index) => (
                                                    <div key={index}>
                                                        <div className='text-center'>
                                                            <div className='w-[50px] mx-auto h-[50px] !bg-[#1c1f2e] rounded-full ring-[2px] cursor-pointer ring-offset-[2px] ring-[#8e44ad]'>
                                                                <img src={u.img} alt="user" className='w-[50px] mx-auto h-[50px] rounded-full overflow-hidden' />
                                                            </div>
                                                            <p className='text-white mt-3'>{u.name.slice(0, 5)}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <div className='text-center'>
                                                <div onClick={() => storyShow(myStory)} className='w-[50px] flex items-center justify-center mx-auto h-[50px] rounded-full ring-[2px] cursor-pointer ring-[#8e44ad]'>
                                                    <span className='text-2xl font-bold text-[#8e44ad]'><AiOutlinePlayCircle /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-8'>
                                        <Button size="md" onClick={() => setImgUrl()} className="!text-white text-center mx-auto hover:bg-[#8e44ad] rounded-[24px] text-[16px] bg-gradient-to-r from-[#13b38f] to-[#2091d9]  !px-10 capitalize flex items-center" variant="text">
                                            add Story
                                            <div style={{ display: 'none' }} className="hidden">
                                                <input type="file" name="images" onChange={onImageChange} ref={imageRef} id="" />
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>
                </main>
                <div className='fixed sm:hidden left-0 bottom-0 w-full flex items-center justify-center border-gray-800 border-t'>
                    <SmNavbar />
                </div>
            </div>
            <CreatePostModal open={postOpen} setPostOpen={setPostOpen} />
            <StoryShow open={StoryOpen} stories={stories} setStoryOpen={setStoryOpen}></StoryShow>
            <OpenStoryModal
                setOpenStory={setOpenStory}
                onImageChange={onImageChange}
                open={openStory}
                img={img}
                image={image}
            />
        </>
    );
};

export default ZoomlaStore;