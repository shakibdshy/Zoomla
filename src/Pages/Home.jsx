/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import { useMantineColorScheme } from '@mantine/core';
import React from 'react';
import Card from '../Share/Card';
import DateTime from '../Share/DateTime';
import Header from '../Share/Header';
import ScheduleList from '../Share/ScheduleList';
import SmNavbar from '../Share/SmNavbar';
import TopBar from '../Share/TopBar';

const Home = () => {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    return (
        <>
            <div className="body-container relative pb-20 sm:pb-0 flex">
                <Header />
                <main className={`w-full sm:ml-[90px] ${dark ? "bg-[#1c1f2e]" : "bg-white"}`}>
                    <TopBar />
                    <section className='home-body flex w-full h-screen pt-20 md:flex-nowrap flex-wrap'>
                        <div className='p-4 sm:pt-8 lg:pt-16 w-full'>
                            <Card />
                        </div>
                        <div className='p-4 sm:pt-8 lg:pt-16 w-full sm:border-l overflow-y-scroll border-gray-800'>
                            <div className='max-w-xl mx-auto'>
                                <DateTime />
                                <ScheduleList />
                            </div>
                        </div>
                    </section>
                </main>
                <div className='fixed sm:hidden left-0 bottom-0 w-full flex items-center justify-center border-gray-800 border-t'>
                    <SmNavbar />
                </div>
            </div>
        </>
    );
};

export default Home;