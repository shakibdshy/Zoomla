import Image from 'next/image'
import React from 'react'
import Card from '../components/Card'
import DateComponent from '../components/Date'
import DateTime from '../components/DateTime'
import ScheduleList from '../components/ScheduleList'
import TopBar from '../components/TopBar'


function HomePage() {

  return (
    <>

      <TopBar />
      <section className='flex w-full h-screen pt-20 md:flex-nowrap flex-wrap'>
        <div className='p-4 w-full'>
          <Card />
        </div>
        <div className='p-4 w-full border-l overflow-y-scroll border-grey-800'>
          {/* <DateTime /> */}
          <DateComponent />
          <ScheduleList />
        </div>
      </section>
    </>
  )
}

export default HomePage