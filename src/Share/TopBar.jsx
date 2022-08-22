/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { signOut } from "firebase/auth";
import { Link, useLocation } from "react-router-dom";
import { useMantineColorScheme } from "@mantine/core";
import { UseUserContext } from "../context/UpcommingContext";

function TopBar() {
  const [user] = useAuthState(auth);
  const { pathname } = useLocation();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [currentUser, users, setUser] = UseUserContext();
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <section
      className={`p-1 sm:p-3 sm:py-4 bg-dark fixed top-0 left-0 sm:pl-10 pl-3 w-full z-10 ${dark ? "bg-[#1c1f2e]" : "bg-white"
        } border-b border-gray-800`}
    >
      <ul className="flex items-center justify-between gap-x-2 sm:gap-x-5">
        <li className="text-white hidden sm:block font-medium text-2xl sm:pl-20 capitalize">
          {pathname.slice(1)}
          {pathname === "/" && "Home"}
          {pathname.slice(1, 7) === "preview" && "Meeting Room"}
        </li>
        <li className="sm:hidden">
          <Link to="/">
            <p className="p-3 text-white bg-[#0e78f9] text-2xl w-12 h-12 rounded-xl block shadow-md">
              <FaVideo className="shadow-sm" />
            </p>
          </Link>
        </li>
        <li className="ml-auto hidden sm:block grow-0 shrink-0 basis-auto">
          <form className="relative z-10">
            <input
              type="text"
              name="name"
              placeholder="Search by keyword"
              className={`!w-full md:w-80 py-1 sm:py-2 pl-8 sm:pl-12 ${dark ? "border border-[#262938] bg-[#212534] text-white placeholder:text-[#797981d3]" : "text-slate-400 ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300"} rounded-lg transition-all text-lg `}
            />
            <FiSearch className="search-icon" />
          </form>
        </li>
        {user && (
          <li className="w-12 h-12">
            <Menu placement="bottom-end">
              <MenuHandler>
                <div className="">
                  {currentUser?.img && <div className='w-[50px] h-[50px] bottom-[-20px] rounded-full ring-[4px] cursor-pointer ring-offset-[3px] ring-blue-600'>
                    <img src={currentUser?.img} className="w-[50px] h-[50px] rounded-full" alt="user" />
                  </div>}
                  {!(currentUser?.img) && (
                    <div className="sm:w-[50px] w-[40px] h-[40px] sm:h-[50px] ring-2 cursor-pointer ring-offset-2 ring-blue-800 rounded-full bg-blue-600 flex items-center justify-center">
                      <h1 className="text-2xl text-white font-bold">
                        {currentUser?.name.slice(0, 1)}
                      </h1>
                    </div>
                  )}
                </div>
              </MenuHandler>
              <MenuList className="bg-[#272b39] shadow-sm border-transparent">
                <Link to="/userProfile">
                  <MenuItem className="text-gray-400 border-b border-gray-800 hover:bg-[#242736] hover:text-gray-500 hover:shadow-md">
                    <div className="text-center">
                      {user?.displayName && (
                        <div className="w-[60px] h-[60px] mx-auto rounded-full bg-blue-600 flex items-center justify-center">
                          <h1 className="text-2xl capitalize text-white font-bold">
                            {user?.displayName.slice(0, 1)}
                          </h1>
                        </div>
                      )}
                      <h3 className="mt-2 font-bold">
                        {user ? user?.displayName : "Zoomla"}
                      </h3>
                    </div>
                  </MenuItem>
                </Link>
                <Link to="userProfile">
                  <MenuItem className="text-gray-400 hover:bg-[#242736] hover:text-gray-500 hover:shadow-md">
                    My Profile
                  </MenuItem>
                </Link>
                <MenuItem className="text-gray-400 hover:bg-[#242736] hover:text-gray-500 hover:shadow-md">
                  Update
                </MenuItem>
                <MenuItem
                  onClick={logOut}
                  className="text-gray-400 hover:bg-[#242736] hover:text-gray-500 hover:shadow-md"
                >
                  Sign Out
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
        )}
        {!user && (
          <li className={`${dark ? "text-white" : "text-black"} text-xl font-bold pr-6`}>
            <Link to="/signIn">
              <span>Sing In</span>
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
}

export default TopBar;