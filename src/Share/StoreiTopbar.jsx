/* eslint-disable prettier/prettier */
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiMessengerLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import {
    Button,
} from "@material-tailwind/react";


function StoreiTopBar({ setPostOpen, open }) {
    return (
        <section className="">
            <div className="flex items-start justify-between">
                <div>
                    <div className="relative z-10">
                        <input
                            type="text"
                            name="name"
                            placeholder="Search by keyword"
                            className=" bg-gray-800 p-3 text-white pl-12 rounded-[24px]"
                        />
                        <FiSearch className="search-icon" />
                    </div>
                </div>
                <ul className="flex items-center gap-x-4">
                    <li className="text-white text-2xl cursor-pointer">
                        <span><IoMdNotificationsOutline /></span>
                    </li>
                    <li className="text-white text-2xl cursor-pointer">
                        <span><RiMessengerLine /></span>
                    </li>
                    <li className="text-white">
                        <Button size="md" onClick={() => setPostOpen(!open)} className="!text-white hover:bg-[#8e44ad] rounded-[24px] text-[16px] bg-[#8e44ad] !px-4 capitalize flex items-center" variant="text">Create Post</Button>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default StoreiTopBar;
