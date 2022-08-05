import Image from 'next/image'
import React from 'react'
import author from '../assets/author2.jpg'
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/router';
import { FaVideo } from 'react-icons/fa'
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import type { MenuHandlerProps } from "@material-tailwind/react";
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.init';
import { signOut } from 'firebase/auth';

function TopBar() {
    const { asPath } = useRouter();
    const [user, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem('accessToken');
    }

    return (
        <section className='p-1 sm:p-3 sm:py-4 bg-dark fixed top-0 left-0 sm:pl-10 pl-3 w-full z-10 bg-[#1c1f2e] border-b border-grey-800'>
            <div className=''>
                <ul className='flex items-center justify-between gap-x-2 sm:gap-x-5'>
                    <li className='text-white hidden sm:block font-medium text-2xl sm:pl-20 capitalize'>{asPath.slice(1)}</li>
                    <li className='sm:hidden'>
                        <Link href='/home'>
                            <a className='p-3 text-white bg-[#0e78f9] text-2xl w-12 h-12 rounded-xl block shadow-md'><FaVideo className='shadow-sm' /></a>
                        </Link>
                    </li>
                    <li className='ml-auto hidden sm:block grow-0 shrink-0 basis-auto'>
                        <form className='relative z-10'>
                            <input type="text" name="name" placeholder='Search by keyword' className='search-input' />
                            <FiSearch className='search-icon' />
                        </form>
                    </li>
                    {user && <li className='w-12 h-12'>
                        <Menu placement="bottom-end">
                            <MenuHandler>
                                <div className=''>
                                    {user?.displayName && <div className='sm:w-[50px] w-[40px] h-[40px] sm:h-[50px] ring-2 cursor-pointer ring-offset-2 ring-blue-800 rounded-full bg-blue-600 flex items-center justify-center'>
                                        <h1 className='text-2xl text-white font-bold'>{user?.displayName.slice(0, 1)}</h1>
                                    </div>}
                                    {/* {!user?.displayName && <div className='cursor-pointer'>
                                        <Image src={author} alt="Author Image" width={50} height={50} objectFit='cover' quality={100} className='rounded-xl' />
                                    </div>} */}
                                </div>
                            </MenuHandler>
                            <MenuList className='bg-[#272b39] shadow-sm border-transparent'>
                                <MenuItem className='text-grey-400 border-b border-grey-800 hover:bg-[#242736] hover:text-grey-500 hover:shadow-md'>
                                    <div className='text-center'>
                                        {user?.displayName && <div className='w-[60px] h-[60px] mx-auto rounded-full bg-blue-600 flex items-center justify-center'>
                                            <h1 className='text-2xl capitalize text-white font-bold'>{user?.displayName.slice(0, 1)}</h1>
                                        </div>}
                                        {/* {!user?.displayName && <Image src={author} alt="Author Image" width={60} height={60} objectFit='cover' quality={100} className='rounded-full right-2 ring-blue-500' />} */}
                                        <h3 className='mt-2 font-bold'>{user ? user?.displayName : 'Zoomla'}</h3>
                                    </div>
                                </MenuItem>
                                <MenuItem className='text-grey-400 hover:bg-[#242736] hover:text-grey-500 hover:shadow-md'>Sittings</MenuItem>
                                <MenuItem className='text-grey-400 hover:bg-[#242736] hover:text-grey-500 hover:shadow-md'>Update</MenuItem>
                                <MenuItem onClick={logOut} className='text-grey-400 hover:bg-[#242736] hover:text-grey-500 hover:shadow-md'>Sign Out</MenuItem>
                            </MenuList>
                        </Menu>
                    </li>}
                    {!user && <li className='text-white text-xl font-bold'>
                        <Link href='/signIn'>
                            <a>Sing In</a>
                        </Link>
                    </li>}
                </ul>

            </div>
        </section>
    )
}

export default TopBar