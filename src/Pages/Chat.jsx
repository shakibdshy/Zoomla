/* eslint-disable prettier/prettier */
import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  Chip
} from "@material-tailwind/react";
import { AiFillStar } from 'react-icons/ai';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import author from '../assets/author2.jpg'
import author2 from '../assets/author.jpg'
import { BsPlusSquare, BsStar, BsCameraVideo, BsFileText, BsFileEarmarkCheck, BsMic, BsEmojiSmile } from 'react-icons/bs'
import { RiShareBoxLine } from 'react-icons/ri'
import { BiScreenshot } from 'react-icons/bi'
import SmNavbar from '../Share/SmNavbar';
import TopBar from '../Share/TopBar';
import Header from '../Share/Header';

function Chat() {
  return (
    <>
      <div className="body-container relative pb-20 sm:pb-0 flex">
        <Header />
        <main className='w-full sm:w-[95%] sm:ml-[90px]'>
          <TopBar />
          <div>
            <title>Chat Screen | Video Conference Meeting and Real Time Chat</title>
            <meta name="description" content="Video Conference Meeting and Real Time Chat" />
            <link rel="icon" href="/favicon.ico" />
          </div>

          <Tabs value="html" className='home-body flex w-full h-screen flex-wrap md:flex-nowrap'>
            <div className='p-4 mt-20 w-full max-w-sm'>
              <ul className='flex items-center justify-between gap-x-2 sm:gap-x-5 pt-1 pb-5 mb-5 border-b border-[#2c2f3c]'>
                <li className='w-full shadow-md'>
                  <form className='relative z-10'>
                    <input type="text" name="name" placeholder='Jump to...' className='search-input max-w-full w-full pl-4' />
                  </form>
                </li>
                <li>
                  <Button className='w-[46px] h-[46px] bg-[#272a38] border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><BsPlusSquare className='m-auto' /></Button>
                </li>
              </ul>

              <TabsHeader className='flex-col bg-transparent gap-2 text-white'>
                <Tab key={1} value='starred' className='chat-tab pl-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <AiFillStar className='text-gray-500' />
                      <span className="tab-title">Starred Messages</span>
                    </div>
                    <span className='w-10 h-10 bg-[#272a38] border border-[#2c2f3c] shadow-md rounded-md text-gray-500 leading-[40px]'>0</span>
                  </div>
                </Tab>
                <Tab key={2} value='request' className='chat-tab pl-4'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <MdOutlinePermContactCalendar className='text-gray-500' />
                      <span className='tab-title'>Contact Requests</span>
                    </div>
                    <span className='w-10 h-10 bg-[#272a38] border border-[#2c2f3c] shadow-md rounded-md text-gray-500 leading-[40px]'>2</span>
                  </div>
                </Tab>
                <div>
                  <h3 className='text-xl text-white font-bold mt-5 mb-3'>Recent</h3>
                </div>
                <Tab key={3} value='mw' className='single-chat-tab'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <img
                        className='rounded-xl w-[40px] h-[40px]'
                        src={author}
                        alt="Author"
                      />
                      <span className='text-white'>Michelle Williams</span>
                    </div>
                  </div>
                </Tab>
                <Tab key={4} value='sb' className='single-chat-tab'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <img
                        className='rounded-xl w-[40px] h-[40px]'
                        src={author2}
                        alt="Author"
                      />
                      <span className='text-white'>Michelle Williams</span>
                    </div>
                  </div>
                </Tab>
              </TabsHeader>

            </div>
            <div className='py-4 mt-20 w-full !relative border-l overflow-y-scroll border-gray-800'>
              <TabsBody>
                <TabPanel className='p-0 !h-[100vh]' value='starred'>
                  <div className='pb-4 px-4 sticky top-0 left-0 right-0 border-b border-[#2c2f3c]'>
                    <div className='flex items-center justify-between gap-2'>
                      <div className='flex items-center gap-4'>
                        <img
                          className='rounded-xl w-[40px] h-[40px]'
                          src={author}
                          alt="Author"
                        />
                        <div>
                          <span className='text-white block'>Michelle Williams</span>
                          <Chip className='!text-xs py-0 px-2 rounded-sm' variant="filled" value="External" />
                        </div>
                      </div>
                      <ul className='flex items-center gap-2'>
                        <li>
                          <Button className='w-[46px] h-[46px] bg-[#272a38] hover:bg-[#0e78f9]  border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><BsStar /></Button>
                        </li>
                        <li>
                          <Button className='w-[46px] h-[46px] bg-[#272a38] hover:bg-[#0e78f9] border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><BsCameraVideo /></Button>
                        </li>
                        <li>
                          <Button className='w-[46px] h-[46px] bg-[#272a38] hover:bg-[#0e78f9] border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><RiShareBoxLine /></Button>
                        </li>
                        <li>
                          <Button className='w-[46px] h-[46px] bg-[#272a38] hover:bg-[#0e78f9] border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><BsFileText /></Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='h-full'>
                    <div className='flex items-start justify-between py-4 px-4'>
                      <div className='flex items-start gap-4'>
                        <img
                          className='rounded-xl w-[40px] h-[40px]'
                          src={author2}
                          alt="Author"
                        />
                        <div className='space-y-3'>
                          <div className='flex justify-start'>
                            <div className='bg-[#0e78f9] text-white py-[6px] px-4 rounded-xl text-sm max-w-xs'>Hey You!</div>
                          </div>
                          <div className='flex justify-start'>
                            <div className='bg-[#0e78f9] text-white py-[6px] px-4 rounded-xl text-sm max-w-xs'>Sending you the requested file...</div>
                          </div>
                          <div className='bg-[#0e78f9] text-white py-[6px] px-4 rounded-xl text-sm max-w-xs'>Watch this presentation and tell me What&apos; s missing here?.</div>
                        </div>
                      </div>
                      <div>12:48</div>
                    </div>
                    <div className='flex items-start justify-between py-4 px-4'>
                      <div className='flex items-start gap-4'>
                        <img
                          className='rounded-xl w-[40px] h-[40px]'
                          src={author}
                          alt="Author"
                        />
                        <div className='space-y-3'>
                          <div className='bg-[#222533] shadow-sm text-white py-[6px] px-4 rounded-xl text-sm max-w-xs'>I think everything is on the right place here.</div>
                        </div>
                      </div>
                      <div>08:15</div>
                    </div>
                  </div>
                  <div className='p-4 pb-0 absolute bottom-0 left-0 right-0 z-2 border-t border-[#2c2f3c]'>
                    <ul className='flex items-center gap-4 mb-2'>
                      <li><BiScreenshot /></li>
                      <li><BsFileEarmarkCheck /></li>
                      <li><BsMic /></li>
                      <li className='ml-auto'><BsEmojiSmile /></li>
                    </ul>
                    <form className='relative'>
                      <input type="text" placeholder='Message Here' className='bg-transparent text-sm w-full h-12 focus:outline-none focus:text-white' />
                      <Button size='sm' className='!absolute top-2 right-0'>Send</Button>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel value='request'>
                  <div className='flex flex-col space-y-8'>
                    <div className='flex items-start justify-between'>
                      <div className='flex items-start gap-4'>
                        <img
                          className='rounded-xl w-[40px] h-[40px]'
                          src={author}
                          alt="Author"
                        />
                        <div>
                          <span className='text-white block'>Michelle Williams <span className='text-xs text-gray-400'>email@gmail.com</span></span>
                          <div className='text-sm text-gray-300 mb-4'>You received a contact request</div>
                          <div className='flex items-center gap-4'>
                            <Button size='sm'>Accept</Button>
                            <Button size='sm' color="red">Decline</Button>
                          </div>
                        </div>
                      </div>
                      <div>
                        8:45 PM
                      </div>
                    </div>
                    <div className='flex items-start justify-between'>
                      <div className='flex items-start gap-4'>
                        <img
                          className='rounded-xl w-[40px] h-[40px]'
                          src={author}
                          alt="Author"
                        />
                        <div>
                          <span className='text-white block'>Michelle Williams <span className='text-xs text-gray-400'>email@gmail.com</span></span>
                          <div className='text-sm text-gray-300 mb-4'>You received a contact request</div>
                          <div className='flex items-center gap-4'>
                            <Button size='sm'>Accept</Button>
                            <Button size='sm' color="red">Decline</Button>
                          </div>
                        </div>
                      </div>
                      <div>
                        8:45 PM
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className='p-0 !h-[100vh]' value='mw'>
                  <div className='pb-4 px-4 sticky top-0 left-0 right-0 border-b border-[#2c2f3c]'>
                    <div className='flex items-center justify-between gap-2'>
                      <div className='flex items-center gap-4'>
                        <img
                          className='rounded-xl w-[40px] h-[40px]'
                          src={author}
                          alt="Author"
                        />
                        <div>
                          <span className='text-white block'>Michelle Williams</span>
                          <Chip className='!text-xs py-0 px-2 rounded-sm' variant="filled" value="External" />
                        </div>
                      </div>
                      <ul className='flex items-center gap-2'>
                        <li>
                          <Button className='w-[46px] h-[46px] bg-[#272a38] hover:bg-[#0e78f9]  border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><BsStar /></Button>
                        </li>
                        <li>
                          <Button className='w-[46px] h-[46px] bg-[#272a38] hover:bg-[#0e78f9] border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><BsCameraVideo /></Button>
                        </li>
                        <li>
                          <Button className='w-[46px] h-[46px] bg-[#272a38] hover:bg-[#0e78f9] border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><RiShareBoxLine /></Button>
                        </li>
                        <li>
                          <Button className='w-[46px] h-[46px] bg-[#272a38] hover:bg-[#0e78f9] border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><BsFileText /></Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='h-full'>
                    <div className='flex items-start justify-between py-4 px-4'>
                      <div className='flex items-start gap-4'>
                        <img
                          className='rounded-xl w-[40px] h-[40px]'
                          src={author}
                          alt="Author"
                        />
                        <div className='space-y-3'>
                          <div className='flex justify-start'>
                            <div className='bg-[#0e78f9] text-white py-[6px] px-4 rounded-xl text-sm max-w-xs'>Hey You!</div>
                          </div>
                          <div className='flex justify-start'>
                            <div className='bg-[#0e78f9] text-white py-[6px] px-4 rounded-xl text-sm max-w-xs'>Sending you the requested file...</div>
                          </div>
                          <div className='bg-[#0e78f9] text-white py-[6px] px-4 rounded-xl text-sm max-w-xs'>Watch this presentation and tell me What&apos; s missing here?.</div>
                        </div>
                      </div>
                      <div>12:48</div>
                    </div>
                    <div className='flex items-start justify-between py-4 px-4'>
                      <div className='flex items-start gap-4'>
                        <img
                          className='rounded-xl w-[40px] h-[40px]'
                          src={author}
                          alt="Author"
                        />
                        <div className='space-y-3'>
                          <div className='bg-[#222533] shadow-sm text-white py-[6px] px-4 rounded-xl text-sm max-w-xs'>I think everything is on the right place here.</div>
                        </div>
                      </div>
                      <div>08:15</div>
                    </div>
                  </div>
                  <div className='p-4 pb-0 absolute bottom-0 left-0 right-0 z-2 border-t border-[#2c2f3c]'>
                    <ul className='flex items-center gap-4 mb-2'>
                      <li><BiScreenshot /></li>
                      <li><BsFileEarmarkCheck /></li>
                      <li><BsMic /></li>
                      <li className='ml-auto'><BsEmojiSmile /></li>
                    </ul>
                    <form className='relative'>
                      <input type="text" placeholder='Message Here' className='bg-transparent text-sm w-full h-12 focus:outline-none focus:text-white' />
                      <Button size='sm' className='!absolute top-2 right-0'>Send</Button>
                    </form>
                  </div>
                </TabPanel>
                <TabPanel className='p-0 !h-[100vh]' value='sb'>
                  <div className='pb-4 px-4 sticky top-0 left-0 right-0 border-b border-[#2c2f3c]'>
                    <div className='flex items-center justify-between gap-2'>
                      <div className='flex items-center gap-4'>
                        <img
                          className='rounded-xl w-[40px] h-[40px]'
                          src={author}
                          alt="Author"
                        />
                        <div>
                          <span className='text-white block'>Michelle Williams</span>
                          <Chip className='!text-xs py-0 px-2 rounded-sm' variant="filled" value="External" />
                        </div>
                      </div>
                      <ul className='flex items-center gap-2'>
                        <li>
                          <Button className='w-[46px] h-[46px] bg-[#272a38] hover:bg-[#0e78f9]  border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><BsStar /></Button>
                        </li>
                        <li>
                          <Button className='w-[46px] h-[46px] bg-[#272a38] hover:bg-[#0e78f9] border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><BsCameraVideo /></Button>
                        </li>
                        <li>
                          <Button className='w-[46px] h-[46px] bg-[#272a38] hover:bg-[#0e78f9] border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><RiShareBoxLine /></Button>
                        </li>
                        <li>
                          <Button className='w-[46px] h-[46px] bg-[#272a38] hover:bg-[#0e78f9] border border-[#2c2f3c] !p-4 !shadow-none' size="lg"><BsFileText /></Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='h-full'>
                    <div className='flex items-start justify-between py-4 px-4'>
                      <div className='flex items-start gap-4'>
                        <img
                          className='rounded-xl w-[40px] h-[40px]'
                          src={author}
                          alt="Author"
                        />
                        <div className='space-y-3'>
                          <div className='flex justify-start'>
                            <div className='bg-[#0e78f9] text-white py-[6px] px-4 rounded-xl text-sm max-w-xs'>Hey You!</div>
                          </div>
                          <div className='flex justify-start'>
                            <div className='bg-[#0e78f9] text-white py-[6px] px-4 rounded-xl text-sm max-w-xs'>Sending you the requested file...</div>
                          </div>
                          <div className='bg-[#0e78f9] text-white py-[6px] px-4 rounded-xl text-sm max-w-xs'>Watch this presentation and tell me What&apos; s missing here?.</div>
                        </div>
                      </div>
                      <div>12:48</div>
                    </div>
                    <div className='flex items-start justify-between py-4 px-4'>
                      <div className='flex items-start gap-4'>
                        <img
                          className='rounded-xl w-[40px] h-[40px]'
                          src={author}
                          alt="Author"
                        />
                        <div className='space-y-3'>
                          <div className='bg-[#222533] shadow-sm text-white py-[6px] px-4 rounded-xl text-sm max-w-xs'>I think everything is on the right place here.</div>
                        </div>
                      </div>
                      <div>08:15</div>
                    </div>
                  </div>
                  <div className='p-4 pb-0 absolute bottom-0 left-0 right-0 z-2 border-t border-[#2c2f3c]'>
                    <ul className='flex items-center gap-4 mb-2'>
                      <li><BiScreenshot /></li>
                      <li><BsFileEarmarkCheck /></li>
                      <li><BsMic /></li>
                      <li className='ml-auto'><BsEmojiSmile /></li>
                    </ul>
                    <form className='relative'>
                      <input type="text" placeholder='Message Here' className='bg-transparent text-sm w-full h-12 focus:outline-none focus:text-white' />
                      <Button size='sm' className='!absolute top-2 right-0'>Send</Button>
                    </form>
                  </div>
                </TabPanel>
              </TabsBody>
            </div>
          </Tabs>
        </main>
        <div className='fixed sm:hidden left-0 bottom-0 w-full flex items-center justify-center border-gray-800 border-t'>
          <SmNavbar />
        </div>
      </div>

    </>
  )
}

export default Chat