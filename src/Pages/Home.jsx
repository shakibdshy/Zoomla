/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import { useMantineColorScheme } from '@mantine/core';
import React from 'react';
import Card from '../Shared/Card';
import DateTime from '../Shared/DateTime';
import Header from '../Shared/Header';
import ScheduleList from '../Shared/ScheduleList';
import SmNavbar from '../Shared/SmNavbar';
import TopBar from '../Shared/TopBar';

const Home = () => {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    return (
        <>
            <div className={`body-container ${dark ? "bg-[#1c1f2e] theme-dark" : "bg-white theme-light"} relative sm:pb-0 flex`}>
                <Header />
                <main className={`w-full sm:ml-[90px]`}>
                    <TopBar />
                    <section className='home-body flex w-full h-screen pb-[80px] sm:pb-0 pt-[82px] md:flex-nowrap flex-wrap'>
                        <div className='p-4 sm:pt-8 lg:pt-16 w-full'>
                            <Card />
                        </div>
                        <div className={`p-4 sm:pt-8 lg:pt-16 w-full sm:border-l overflow-y-scroll ${dark ? "border-[#3f445d]" : "zoomla-border-clr-light"}`}>
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