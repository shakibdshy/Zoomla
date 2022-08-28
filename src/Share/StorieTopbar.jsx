/* eslint-disable prettier/prettier */
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import {
    Button,
} from "@material-tailwind/react";


function StorieTopBar({ setPostOpen, open, dark }) {
    return (
        <section className="">
            <div className="flex items-start justify-between">
                <div>
                    <div className="relative hidden sm:block z-10">
                        <input
                            type="text"
                            name="name"
                            placeholder="Search by keyword"
                            className={` ${dark ? "bg-transparent border-[#3f445d] text-white" : "bg-transparent border-[#d1dcf3] text-[#000]"} border p-3 pl-12 rounded-[24px]`}
                        />
                        <FiSearch className="search-icon" />
                    </div>
                </div>
                <ul className="flex items-center gap-x-4">
                    <li className="text-2xl cursor-pointer">
                        <span><IoMdNotificationsOutline /></span>
                    </li>
                    <li className="text-2xl cursor-pointer">
                        <span><RiMessengerLine /></span>
                    </li>
                    <li className="">
                        <Button size="md" onClick={() => setPostOpen(!open)} className="!text-white rounded-[24px] text-[16px] bg-gradient-to-r from-[#13b38f] to-[#2091d9] !px-4 capitalize flex items-center" variant="text">Create Post</Button>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default StorieTopBar;
