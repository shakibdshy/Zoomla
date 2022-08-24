/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useMantineColorScheme } from '@mantine/core';
import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie'; 
import { ChannelContainer, ChannelListContainer, StreamAuth } from '../components/ChatContainer';
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
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

console.log(client);

const ChatPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!authToken) return <StreamAuth />

  return (
    <>
      <div className="body-container relative pb-20 sm:pb-0 flex">
        <Header />
        <main className={`w-full sm:ml-[90px] ${dark ? "bg-[#1c1f2e]" : "bg-white"}`}>
          <TopBar />
          <section className='app__wrapper mt-[80px]'>
            <Chat client={client} theme="team light">
              <ChannelListContainer
                
              />
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