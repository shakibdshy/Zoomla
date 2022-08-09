import Link from 'next/link'
import React from 'react'
import { BsHouseDoorFill, BsChatLeftDots, BsClock, BsCalendar2Date } from 'react-icons/bs'
import { MdOutlineContacts } from 'react-icons/md'
import { useRouter } from 'next/router'

function SmNavbar() {
    const { asPath } = useRouter();
    return (
        <div className='!bg-[#1c1f2e] w-full z-20'>
            <nav className='!p-0'>
                <ul className='!flex items-center justify-center gap-x-3'>
                    <li>
                        <Link href='/home'>
                            <a className={asPath === '/home' ? 'sm-menu-item isActive' : 'sm-menu-item'}><BsHouseDoorFill className='m-auto' /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/chat'>
                            <a className={asPath === '/chat' ? 'sm-menu-item isActive' : 'sm-menu-item'}><BsChatLeftDots /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/meeting'>
                            <a className={asPath === '/meeting' ? 'sm-menu-item isActive' : 'sm-menu-item'}><BsClock /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <a className={asPath === '/contact' ? 'sm-menu-item isActive' : 'sm-menu-item'}><MdOutlineContacts /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/schedule'>
                            <a className={asPath === '/schedule' ? 'sm-menu-item isActive' : 'sm-menu-item'}><BsCalendar2Date /></a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SmNavbar