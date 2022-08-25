/* eslint-disable prettier/prettier */
import React, {} from 'react'
import Header from './Header'
import SmNavbar from './SmNavbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }) {
    return (
        <>
            <div className="body-container relative pb-20 sm:pb-0 flex">
                <Header />
                <main className='w-full sm:w-[95%] sm:ml-[90px]'>
                    {children}
                </main>
                <div className='fixed sm:hidden left-0 bottom-0 w-full flex items-center justify-center border-gray-800 border-t'>
                    <SmNavbar />
                </div>
                <ToastContainer />
            </div>
        </>
    )
}