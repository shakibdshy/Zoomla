/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useMantineColorScheme } from '@mantine/core';
import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie'; 
import { ChannelContainer, ChannelListContainer } from '../components/ChatContainer';
import Header from '../Share/Header';
import SmNavbar from '../Share/SmNavbar';
import TopBar from '../Share/TopBar';
import './ChatPage.css'

const apiKey = '3pznn44zcu9w';

const client = StreamChat.getInstance(apiKey);

// const darkModeTheme = {
//   '--bg-gradient-end': '#101214',
//   '--bg-gradient-start': '#070a0d',
//   '--black': '#ffffff',
//   '--blue-alice': '#00193d',
//   '--border': '#141924',
//   '--button-background': '#ffffff',
//   '--button-text': '#005fff',
//   '--grey': '#7a7a7a',
//   '--grey-gainsboro': '#2d2f2f',
//   '--grey-whisper': '#1c1e22',
//   '--modal-shadow': '#000000',
//   '--overlay': '#00000066',
//   '--overlay-dark': '#ffffffcc',
//   '--shadow-icon': '#00000080',
//   '--targetedMessageBackground': '#302d22',
//   '--transparent': 'transparent',
//   '--white': '#101418',
//   '--white-smoke': '#13151b',
//   '--white-snow': '#070a0d',
// };


const ChatPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <>
      <div className="body-container relative pb-20 sm:pb-0 flex">
        <Header />
        <main className={`w-full sm:ml-[90px] ${dark ? "bg-[#1c1f2e]" : "bg-white"}`}>
          <TopBar />
          <section className='app__wrapper mt-[80px]'>
            <Chat client={client}>
              <ChannelListContainer />
              <ChannelContainer />
            </Chat>
          </section>
        </main>
        <div className='fixed sm:hidden left-0 bottom-0 w-full flex items-center justify-center border-gray-800 border-t'>
          <SmNavbar />
        </div>
      </div>
    </>
  )
}

export default ChatPage