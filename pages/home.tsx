import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Card from '../components/Card'
import DateComponent from '../components/DateTime'
import ScheduleList from '../components/ScheduleList'
import TopBar from '../components/TopBar'


function HomePage() {

  return (
    <>
      <Head>
        <title>Zoomla | Video Conference Meeting and Real Time Chat</title>
        <meta name="description" content="Video Conference Meeting and Real Time Chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <section className='home-body flex w-full h-screen pt-20 md:flex-nowrap flex-wrap'>
        <div className='p-4 sm:pt-8 w-full'>
          <Card />
        </div>
        <div className='p-4 sm:pt-8 w-full border-l overflow-y-scroll border-grey-800'>
          <div className='max-w-xl mx-auto'>
            <DateComponent />
            <ScheduleList />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage