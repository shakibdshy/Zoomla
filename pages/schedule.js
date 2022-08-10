import { useCallback, useState } from 'react';
import FullCalendar, { EventContentArg, EventClickArg, DateSelectArg, EventApi } from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";


// let id = 0;

function schedule() {

  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const handleEvents = useCallback(
    (events: EventApi[]) => setCurrentEvents(events),
    []
  );
  const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
    let title = prompt("Please enter the event title")?.trim();
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }, []);
  const handleEventClick = useCallback((clickInfo: EventClickArg) => {
    if (
      window.confirm(`This event ${clickInfo.event.title}Do you want to delete the`)
    ) {
      clickInfo.event.remove();
    }
  }, []);

  


  // const [events,setEvents]=React.useState<Array<EventApi>>([])
  
  // const [initialEvents, setInitialEvents] = React.useState([
  //   {
  //     id: String(10001),
  //     title: "Hello World",
  //     start: new Date().toISOString().split("T")[0]
  //   },
  //   {
  //     id: String(20002),
  //     title: "Hello World 2",
  //     start: new Date().toISOString().split("T")[0] + "T14:05:00"
  //   }
  // ])
  
  // React.useEffect(()=>{
  //   console.log("eventler", events)
  // },[events])

  // const handleEvents = (events: EventApi[]) => {
  //   setEvents(events)
  // }

  // const renderEventContent = (eventContent: EventContentArg) => {
  //   return (
  //     <>
  //       <b> {eventContent.timeText}</b>
  //       <b style={{ color: "red" }}> {eventContent.event.title}</b>

  //     </>
  //   )
  // }

  // const handleEventClick = (clickInfo: EventClickArg) => {
  //   alert(`Clicked Event ${clickInfo.event.title}`)
  //   console.log(clickInfo.event.id)
  //   clickInfo.event.remove()
  // }

  // const handleDateSelect = (selectInfo: DateSelectArg) => {
  //   let title = prompt("Enter Event Name");
  //   let calenderApi = selectInfo.view.calendar
  //   calenderApi.unselect()
  //   if (title) {
  //     calenderApi.addEvent({
  //       id: String(id++),
  //       title,
  //       start: selectInfo.startStr,
  //       end: selectInfo.endStr,
  //       allDay: selectInfo.allDay
  //     })
  //   }

  // }
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        customButtons={{
          btn:{
            text: "Text Button",
            click(ev: MouseEvent, element: HTMLElement) {
              alert("Special Button Clicked")
            }
          }
        }}
        dateClick={(e) => {
          console.log("dateclick", e)
        }}
        select={handleDateSelect}
        eventClick={handleEventClick}
        // eventContent={renderEventContent}
        // initialEvents={initialEvents}
        initialEvents={INITIAL_EVENTS}
        headerToolbar={{
          left: "prev,next today btn",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay btn"
        }}

        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        eventDragStart={(e) => {
          console.log("started to drag")
        }}

        eventDragStop={(e) => {
          console.log("stopped dragging")
        }}
        eventColor={"white"}
        eventBackgroundColor={"blue"}
        eventBorderColor={"purple"}
        eventRemove={(e) => {
          console.log("event deleted")
        }}

        eventsSet={handleEvents}
        //   dayHeaderFormat={{
        //     week:"short",
        //     day:"numeric",
        //     month:"short"
        // }}
        eventAdd={(e) => {
          console.log("new event added", e)
        }}
        eventChange={(e) => {
          console.log("event changed", e)
        }}
        dayMaxEvents={true}
        weekends={true}
        firstDay={1}      
        buttonText={{
          day: "Day",
          nextYear: "Next Year",
          prevYear: "Previous year",         
          month: "Month",
          today: "Today",
          week: "week"
        }}

      />
    </>
  );
}


export default schedule;



