/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useMantineColorScheme } from '@mantine/core';
import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie'; 
import { ChannelContainer, ChannelListContainer, Auth } from '../components/ChatContainer';
import Header from '../Share/Header';
import SmNavbar from '../Share/SmNavbar';
import TopBar from '../Share/TopBar';
import './ChatPage.css'
import 'stream-chat-react/dist/css/index.css';

const cookies = new Cookies();
const apiKey = '3pznn44zcu9w';
const authToken = cookies.get('token');

const client = StreamChat.getInstance(apiKey);

if (authToken) { 
  client.connectUser(
    {
      token: cookies.get('token'),
      email: cookies.get('email'),
      name: cookies.get('name'),
    },
    authToken
  );
}

console.log(client);

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