import { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

 function schedule() {
  
  return (
    <>
      <FullCalendar
      
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      editable
      selectable
       />
    </>
  )
}


export default schedule;



