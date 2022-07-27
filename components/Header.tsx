import Link from 'next/link'
import React from 'react'
import { BsHouseDoorFill, BsChatLeftDots, BsClock, BsCalendar2Date } from 'react-icons/bs'
import { FaVideo } from 'react-icons/fa'
import { MdOutlineContacts } from 'react-icons/md'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { useRouter } from 'next/router'

function Header() {
    const { asPath } = useRouter();
    return (
        <header className="p-3 fixed !bottom-0 !left-0 inset-0 max-w-[90px] border-r border-grey-800">
            <div className='sm:block hidden'>
                <Link href='/'>
                    <a className='p-4 text-white bg-[#0e78f9] text-2xl w-14 h-14 rounded-xl block shadow-md'><FaVideo className='shadow-sm' /></a>
                </Link>
            </div>
            <nav className='mt-20'>
                <ul>
                    <li>
                        <Link href='/home'>
                            <a className={asPath === '/home' ? 'menu-item isActive' : 'menu-item'}><BsHouseDoorFill className='m-auto' /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/chat'>
                            <a className={asPath === '/chat' ? 'menu-item isActive' : 'menu-item'}><BsChatLeftDots /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/meeting'>
                            <a className={asPath === '/meeting' ? 'menu-item isActive' : 'menu-item'}><BsClock /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <a className={asPath === '/contact' ? 'menu-item isActive' : 'menu-item'}><MdOutlineContacts /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/schedule'>
                            <a className={asPath === '/schedule' ? 'menu-item isActive' : 'menu-item'}><BsCalendar2Date /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a className='menu-item'><HiOutlineLightBulb /></a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header