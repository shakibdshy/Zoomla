/* eslint-disable prettier/prettier */
import React from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from '@emotion/styled';
import SmNavbar from '../Share/SmNavbar';
import TopBar from '../Share/TopBar';
import Header from '../Share/Header';

export const StyleWrapper = styled.div`
  .fc{
    background: #212534;
    color: white;
    border-color: #3b425d;
  }
  .fc tbody{
    border-color: #3b425d;
  }
  .fc td{
    border-color: #3b425d;
  }
  .fc-timegrid-slot {
    height: 50px; // 1.5em by default
    border: none;
 }
`

function Schedule() {


  return (
    <div className="body-container relative pb-20 sm:pb-0 flex">
      <Header />
      <main className='w-full sm:w-[95%] sm:ml-[90px]'>
        <TopBar />
        <div className='p-5'>
          <StyleWrapper>
            <FullCalendar
              initialView="timeGridWeek"
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              editable
              selectable
              events={[
                { title: 'Schedule meeting Zoomla app', date: "2022-08-02T08:00:00", daysOfWeek: [0], backgroundColor: '#0e78f9', start: '2022-08-04', startTime: '06:00', endTime: "08:00", },
                { title: 'Schedule meeting Zoomla app', daysOfWeek: [2], startTime: '07:30', endTime: "09:00", allDay: false, },
                { title: 'schedule meeting', backgroundColor: '#3b425d', daysOfWeek: [1, 3, 5], start: "2022-08-02T08:00:00", end: "2020-08-02T09:40:00", startTime: '10:00', endTime: "11:00", allDay: false, },
              ]}

            />
          </StyleWrapper>
        </div>
      </main>
      <div className='fixed sm:hidden left-0 bottom-0 w-full flex items-center justify-center border-gray-800 border-t'>
        <SmNavbar />
      </div>
    </div>
  )
}


export default Schedule;



