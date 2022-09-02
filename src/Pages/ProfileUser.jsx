/* eslint-disable prettier/prettier */
import { useMantineColorScheme } from '@mantine/core';
import React from 'react';
import Header from '../Shared/Header';
import SmNavbar from '../Shared/SmNavbar';
import TopBar from '../Shared/TopBar';
import UserProfile from '../Shared/UserProfile';

const ProfileUser = () => {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    return (
        <div className={`body-container ${dark ? "bg-[#1c1f2e] theme-dark" : "bg-white theme-light"} relative pb-20 sm:pb-0 flex`}>
            <Header />
            <main className='w-full sm:w-[95%] sm:ml-[90px]'>
                <TopBar />
                <section className=' w-full h-screen sm:pt-28 pt-24  p-8'>
                    <UserProfile />
                </section>
            </main>
            <div className='fixed sm:hidden left-0 bottom-0 w-full flex items-center justify-center border-gray-800 border-t'>
                <SmNavbar />
            </div>
        </div>
    );
};

export default ProfileUser;