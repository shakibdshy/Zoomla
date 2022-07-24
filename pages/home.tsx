import Image from 'next/image'
import React from 'react'
import Card from '../components/Card'
import DateTime from '../components/DateTime'
import ScheduleList from '../components/ScheduleList'
import TopBar from '../components/TopBar'


function HomePage() {

  return (
    <>

      <TopBar />
      <section className='flex h-screen pt-20 md:flex-nowrap flex-wrap'>
        <div className='p-4'>
          <Card />
        </div>
        <div className='p-4 border-l overflow-y-scroll border-grey-800'>
          <DateTime />
          <ScheduleList />
        </div>
      </section>
    </>
  )
}

export default HomePage