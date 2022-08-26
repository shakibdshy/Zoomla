/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import author from "../assets/shakib.jpg";
import author2 from "../assets/rohul.png";
import DeletingModal from "./DeletingModal";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { UseStateContext } from "../context/UpcommingContext";
// import Loading from "./Loading";
import { Avatar, Skeleton } from "@mantine/core";
import { useLocation } from "react-router-dom";

function ScheduleList({ setScheduleItem }) {
  const [events, , loading] = UseStateContext();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [event, setEvent] = useState({});
  const [schedule, setSchedule] = useState("events[0]?._id");
  const { pathname } = useLocation();
  const method = 'events'
  const user = [
    author,
    author2,
    author,
    author2,
    author2,
    author,
    author2,
    author2,
    author,
  ];

  // if (loading) {
  //   <Loading />;
  // }

  useEffect(() => {
    setSchedule(events[0]?._id);
  }, [events]);

  const handleOpen = event => {
    if (event) {
      setDeleteOpen(!deleteOpen);
      setEvent(event);
    }
  };
  const handleSchedule = event => {
    
    if((pathname === '/meeting-page')){
      setSchedule(event._id);
      setScheduleItem(event);
    }

  };
  const handleDateHour = (date, time) => {
    let difference = +new Date(date) - +new Date();
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    return hours;
  };

  return (
    <div className="w-full text-white pt-4">
      <div className="grid gap-3">
        {events?.map(event => (
          <>
            <Skeleton visible={loading} 
              onClick={() => handleSchedule(event)}
              key={event?._id}
              className={` ${
                ((schedule === event?._id) & (pathname === '/meeting-page')) &&
                "!bg-[#0e78f9] duration-300 border !border-[#4496f9]"
              } w-full border bg-[#212534] border-[#262938] p-3 sm:p-5 rounded-xl shadow-sm`}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">{event?.name}</h1>
                <div>
                  {!(pathname === '/meeting-page') && <Menu placement="bottom-end">
                    <MenuHandler>
                      <Button
                        size="sm"
                        className="!text-gray-500 bg-[#272b39] border border-[#262938] text-xl shadow-md"
                        variant="text"
                      >
                        <BsThreeDots />
                      </Button>
                    </MenuHandler>
                    <MenuList className="bg-[#272b39] shadow-sm border-transparent">
                      <MenuItem className="text-gray-400 hover:bg-[#242736] hover:text-gray-500 hover:shadow-md">
                        Copy Invitation Link
                      </MenuItem>
                      <MenuItem className="text-gray-400 hover:bg-[#242736] hover:text-gray-500 hover:shadow-md">
                        Edit
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleOpen(event)}
                        className="text-gray-400 hover:bg-[#242736] hover:text-gray-500 hover:shadow-md"
                      >
                        Delete
                      </MenuItem>
                    </MenuList>
                  </Menu>}
                </div>
              </div>
              <ul className="schedule-list-meta text-xs mt-2 text-gray-400 flex items-center gap-4">
                <li className="flex items-center gap-1">
                  <MdOutlineWatchLater /> {event?.time1}-{event?.time2}
                </li>
                <li>
                  start in {handleDateHour(event?.date, event?.time1)} hours
                </li>
              </ul>
              <div className="flex justify-between mt-8 items-center">
                <div className="flex items-center !gap-x-2">
                  <Avatar.Group spacing="sm">
                    {user.slice(0, 3).map(u => (
                      <>
                        <Avatar src={u} radius="xl" />
                      </>
                    ))}
                    { (user.length > 3) && <Avatar sx={{ backgroundColor: "orange" }} radius="xl">
                    +{user?.length - 3}
                    </Avatar>}
                  </Avatar.Group>
                </div>
                <div>
                  <Button
                    size="md"
                    className={` ${
                      schedule === event?._id &&
                      "!bg-[#318cf9] duration-100 border !border-[#4496f9] !text-[#fff]"
                    } text-gray-500 !px-3 bg-[#282c3a] mr-2 lowercase`}
                    variant="text"
                  >
                    id
                  </Button>
                  { !(pathname === '/meeting-page') &&  <Button
                    size="md"
                    variant="filled"
                    className="bg-[#0e78f9] sm:!px-4 !px-3 capitalize"
                  >
                    start
                  </Button>}
                </div>
              </div>
            </Skeleton>
          </>
        ))}
      </div>
      <DeletingModal
        setDeleteOpen={setDeleteOpen}
        event={event}
        method={method}
        open={deleteOpen}
      />
    </div>
  );
}

export default ScheduleList;
