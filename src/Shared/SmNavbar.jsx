/* eslint-disable prettier/prettier */
import { useMantineColorScheme } from "@mantine/core";
import React from "react";
import {
  BsHouseDoorFill,
  BsChatLeftDots,
  BsClock,
  BsCalendar2Date,
} from "react-icons/bs";
import { CgStories } from "react-icons/cg"
import { MdOutlineContacts } from "react-icons/md";
import { NavLink } from "react-router-dom";

function SmNavbar() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <div className={` ${dark ? '!bg-[rgb(28,31,46)] border-[#3f445d]' : "bg-white zoomla-border-clr"} w-full z-20`}>
      <nav className="!p-0">
        <ul className="!flex items-center justify-center gap-x-3">
          <li>
            <NavLink to='/'>
              {({ isActive }) => <span className={isActive ? 'sm-menu-item isActive' : 'sm-menu-item'}><BsHouseDoorFill className='m-auto' /></span>}
            </NavLink>
          </li>
          <li>
            <NavLink to='/chat'>
              {({ isActive }) => <span className={isActive ? 'sm-menu-item isActive' : 'sm-menu-item'}><BsChatLeftDots /></span>}
            </NavLink>
          </li>
          <li>
            <NavLink to='/meeting-page'>
              {({ isActive }) => <span className={isActive ? 'sm-menu-item isActive' : 'sm-menu-item'}><BsClock /></span>}
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>
              {({ isActive }) => <span className={isActive ? 'sm-menu-item isActive' : 'sm-menu-item'}><MdOutlineContacts /></span>}
            </NavLink>
          </li>
          <li>
            <NavLink to='/schedule'>
              {({ isActive }) => <span className={isActive ? 'sm-menu-item isActive' : 'sm-menu-item'}><BsCalendar2Date /></span>}
            </NavLink>
          </li>
          <li>
            <NavLink to='/stories'>
              {({ isActive }) => <span className={isActive ? 'sm-menu-item isActive' : 'sm-menu-item'}><CgStories /></span>}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SmNavbar;
