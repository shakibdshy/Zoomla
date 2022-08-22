/* eslint-disable prettier/prettier */
import React from 'react';
import Header from '../Share/Header';
import SmNavbar from '../Share/SmNavbar';
import TopBar from '../Share/TopBar';
import UserProfile from '../Share/UserProfile';

const ProfileUser = () => {
    return (
        <div className="body-container relative pb-20 sm:pb-0 flex">
            <Header />
            <main className='w-full sm:w-[95%] sm:ml-[90px]'>
                <TopBar />
                <section className=' w-full h-screen pt-20 p-8'>
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