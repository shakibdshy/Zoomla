/* eslint-disable prettier/prettier */
import React from 'react'
import { BsHouseDoorFill, BsChatLeftDots, BsClock, BsCalendar2Date } from 'react-icons/bs'
import { FaVideo } from 'react-icons/fa'
import { MdOutlineContacts } from 'react-icons/md'
import { CgStories } from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom'
// import '../globals.css'
function Header() {
    return (
        <header className="p-3 hidden !bg-[rgb(28,31,46)] sm:block !z-20 fixed !bottom-0 !left-0 sm:inset-0 max-w-[90px] border-r border-gray-800">
            <div className='sm:block hidden'>
                <Link to='/'>
                    <p className='p-4 text-white bg-[#0e78f9] text-2xl w-14 h-14 rounded-xl block shadow-md'><FaVideo className='shadow-sm' /></p>
                </Link>
            </div>
            <nav className='mt-20'>
                <ul>
                    <li>
                        <NavLink to='/'>
                            { ({ isActive }) => <span className={ isActive ? 'menu-item isActive' : 'menu-item'}><BsHouseDoorFill className='m-auto' /></span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/chat'>
                            { ({ isActive }) => <span className={ isActive ? 'menu-item isActive' : 'menu-item'}><BsChatLeftDots /></span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/meeting-page'>
                            { ({ isActive }) => <span className={ isActive ? 'menu-item isActive' : 'menu-item'}><BsClock /></span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>
                            { ({ isActive }) => <span className={ isActive ? 'menu-item isActive' : 'menu-item'}><MdOutlineContacts /></span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/schedule'>
                            { ({ isActive }) => <span className={ isActive ? 'menu-item isActive' : 'menu-item'}><BsCalendar2Date /></span>}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/stories'>
                            { ({ isActive }) => <span className={ isActive ? 'menu-item isActive' : 'menu-item'}><CgStories /></span>}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header