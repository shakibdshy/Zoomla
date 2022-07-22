import Link from 'next/link'
import React from 'react'
import { BsHouseDoorFill, BsChatLeftDots, BsClock, BsCalendar2Date } from 'react-icons/bs'
import { FaVideo } from 'react-icons/fa'
import { MdOutlineContacts } from 'react-icons/md'
import { HiOutlineLightBulb } from 'react-icons/hi'

function Header() {
    return (
        <header className="p-6 fixed inset-0 max-w-[105px] border-r border-[#272a38]">
            <div>
                <Link href='/'>
                    <a className='p-4 text-white bg-[#0e78f9] text-2xl w-14 h-14 rounded-xl block shadow-md'><FaVideo className='shadow-sm' /></a>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/home'>
                            <a><BsHouseDoorFill /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/chat'>
                            <a><BsChatLeftDots /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/meeting'>
                            <a><BsClock /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <a><MdOutlineContacts /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/schedule'>
                            <a><BsCalendar2Date /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a><HiOutlineLightBulb /></a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header