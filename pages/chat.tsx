import React, { useState } from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button
} from "@material-tailwind/react";
import Head from 'next/head';
import TopBar from '../components/TopBar';
import { AiFillStar } from 'react-icons/ai';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import author from '../assets/author2.jpg'
import author2 from '../assets/author.jpg'
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi'
import { BsPlusSquare } from 'react-icons/bs'

function Chat() {
  return (
    <>
      <Head>
        <title>Chat Screen | Video Conference Meeting and Real Time Chat</title>
        <meta name="description" content="Video Conference Meeting and Real Time Chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <Tabs value="html" className='home-body flex w-full h-screen flex-wrap md:flex-nowrap'>
        <div className='p-4 mt-20 w-full max-w-sm'>
          <ul className='flex items-center justify-between gap-x-2 sm:gap-x-5 pt-1 pb-5 mb-5 border-b border-[#2c2f3c]'>
            <li className='w-full shadow-md'>
              <form className='relative z-10'>
                <input type="text" name="name" placeholder='Jump to...' className='search-input max-w-full w-full pl-4' />
              </form>
            </li>
            <li>
              <Button className='w-[46px] h-[46px] bg-[#272a38] border border-[#2c2f3c] shadow-md !p-4 !shadow-none' size="lg"><BsPlusSquare className='m-auto' /></Button>
            </li>
          </ul>

          <TabsHeader className='flex-col bg-transparent gap-2 text-white'>
            <Tab key={1} value='starred' className='chat-tab pl-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <AiFillStar className='text-grey-500' />
                  <span className="tab-title">Starred Messages</span>
                </div>
                <span className='w-10 h-10 bg-[#272a38] border border-[#2c2f3c] shadow-md rounded-md text-grey-500 leading-[40px]'>0</span>
              </div>
            </Tab>
            <Tab key={2} value='request' className='chat-tab pl-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <MdOutlinePermContactCalendar className='text-grey-500' />
                  <span className='tab-title'>Contact Requests</span>
                </div>
                <span className='w-10 h-10 bg-[#272a38] border border-[#2c2f3c] shadow-md rounded-md text-grey-500 leading-[40px]'>2</span>
              </div>
            </Tab>
            <div>
              <h3 className='text-xl text-white font-bold mt-5 mb-3'>Resent</h3>
            </div>
            <Tab key={3} value='mw' className='single-chat-tab'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <Image src={author} alt="Author Image" width={40} height={40} objectFit='cover' quality={100} className='rounded-xl' />
                  <span className='text-white'>Michelle Williams</span>
                </div>
              </div>
            </Tab>
            <Tab key={4} value='sb' className='single-chat-tab'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <Image src={author2} alt="Author Image" width={40} height={40} objectFit='cover' quality={100} className='rounded-xl' />
                  <span className='text-white'>Michelle Williams</span>
                </div>
              </div>
            </Tab>
          </TabsHeader>

        </div>
        <div className='p-4 mt-20 w-full border-l overflow-y-scroll border-grey-800'>
          <TabsBody>
            <TabPanel value='starred'>
              It really matters and then like it really does matter. What matters is the people who are sparked by it. And the people who are like offended by it, it does matter.
            </TabPanel>
            <TabPanel value='request'>
              Because it is about motivating the doers. Because I am here to follow my dreams and inspire other people to follow their dreams, too.
            </TabPanel>
          </TabsBody>
        </div>
      </Tabs>
    </>
  )
}

export default Chat