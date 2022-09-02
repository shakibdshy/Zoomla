/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { Button, useMantineColorScheme } from "@mantine/core";
import author from "../assets/shakib.jpg";
import author2 from "../assets/rohul.png";
import DeletingModal from "./DeletingModal";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { UseStateContext, UseUserContext } from "../context/UpcomingContext";
import { Avatar } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion"

function ScheduleList({ setScheduleItem }) {
  const [currentUser] = UseUserContext();
  const [events, ,] = UseStateContext();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [event, setEvent] = useState({});
  const [schedule, setSchedule] = useState("events[0]?._id");
  const { pathname } = useLocation();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const method = "api/meeting";
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

  const myEvents = events?.filter(e => e?.email?.includes(currentUser?.email))


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
    if (pathname === "/meeting-page") {
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
          <div key={event?._id}>
            <motion.div
              initial={{ y: "10vw", transition: { type: "spring", duration: 2 } }}
              animate={{ y: 0, transition: { type: "spring", duration: 2 } }}
              exit={{ y: "60vw", scale: [1, 0], transition: { duration: 0.5 } }}
              onClick={() => handleSchedule(event)}
              className={` ${(schedule === event?._id) & (pathname === "/meeting-page") &&
                (!dark ? "!bg-[#eff6ff] duration-300 !text-[#0e78f9]" : "bg-[#0e78f9] text-white")
                } w-full border  p-3 sm:p-5 rounded-xl  ${dark
                  ? "bg-[#212534] text-white border-[#262938] shadow-sm"
                  : "text-[#000] zoomla-shadow-xl"
                }`}
            >
              <div className="flex justify-between items-center">
                <h1
                  className={`text-xl font-bold `}
                >
                  {event?.name}
                </h1>
                <div>
                  {!(pathname === "/meeting-page") && (
                    <Menu placement="bottom-end">
                      <MenuHandler>
                        <Button
                          size="sm"
                          className={`${dark ? "" : ""} text-xl shadow-md`}
                          variant="outline"
                        >
                          <BsThreeDots />
                        </Button>
                      </MenuHandler>
                      <MenuList className="zoomla-shadow-xl border-transparent">
                        <MenuItem className="hover:shadow-md">
                          Copy Invitation Link
                        </MenuItem>
                        <MenuItem className="hover:shadow-md">Edit</MenuItem>
                        <MenuItem
                          onClick={() => handleOpen(event)}
                          className="hover:shadow-md"
                        >
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  )}
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
                    {user.slice(0, 3).map((u, i) => (
                      <Avatar key={i} src={u} radius="xl" />
                    ))}
                    {user.length > 3 && (
                      <Avatar sx={{ backgroundColor: "orange" }} radius="xl">
                        +{user?.length - 3}
                      </Avatar>
                    )}
                  </Avatar.Group>
                </div>
                <div>
                  <Button
                    size="md"
                    className={` ${(schedule === event?._id) & (pathname === "/meeting-page") &&
                      "!bg-[#318cf9] duration-100 border !border-[#4496f9] !text-[#fff]"
                      } ${dark ? "text-gray-500 bg-[#282c3a]" : "!bg-[#eff6ff] text-[#0e78f9]"} !px-3 mr-2 lowercase`}
                    variant="text"
                  >
                    id
                  </Button>
                  {!(pathname === "/meeting-page") && (
                    <Button
                      component="a"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://zoomla.vercel.app/meeting/62e9232ec166400656965011/guest"
                      className={`${dark ? "bg-[#0e78f9] text-white" : "!bg-[#eff6ff] text-[#0e78f9]"} capitalize`}
                    >
                      start
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
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
