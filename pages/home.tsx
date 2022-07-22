import Image from 'next/image'
import React, { useEffect } from 'react'
import Card from '../components/Card'
import DateTime from '../components/DateTime'
import ScheduleList from '../components/ScheduleList'
import TopBar from '../components/TopBar'

function HomePage() {

  return (
    <>
      <TopBar />
      <section className='flex flex-wrap'>
        <div>
          <Card />
        </div>
        <div>
          <DateTime />
          <ScheduleList />
        </div>
      </section>
    </>
  )
}

export default HomePage