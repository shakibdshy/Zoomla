import Image from 'next/image'
import React from 'react'
import author from '../assets/author2.jpg'
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/router';
import { FaVideo } from 'react-icons/fa'
import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import type { MenuHandlerProps } from "@material-tailwind/react";
import Link from 'next/link';

function TopBar() {
    const { asPath } = useRouter();
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
                    <li className='w-12 h-12'>
                        <Menu placement="bottom-end">
                            <MenuHandler>
                                <div className='cursor-pointer'>
                                    <Image src={author} alt="Author Image" width={50} height={50} objectFit='cover' quality={100} className='rounded-xl' />
                                </div>
                            </MenuHandler>
                            <MenuList className='bg-[#272b39] shadow-sm border-transparent'>
                                <MenuItem className='text-grey-400 border-b border-grey-800 hover:bg-[#242736] hover:text-grey-500 hover:shadow-md'>
                                    <div className='text-center'>
                                        <Image src={author} alt="Author Image" width={60} height={60} objectFit='cover' quality={100} className='rounded-full right-2 ring-blue-500' />
                                        <h3 className='mt-2 font-bold'>Arifa Anjum</h3>
                                    </div>
                                </MenuItem>
                                <MenuItem className='text-grey-400 hover:bg-[#242736] hover:text-grey-500 hover:shadow-md'>Sittings</MenuItem>
                                <MenuItem className='text-grey-400 hover:bg-[#242736] hover:text-grey-500 hover:shadow-md'>Update</MenuItem>
                                <MenuItem className='text-grey-400 hover:bg-[#242736] hover:text-grey-500 hover:shadow-md'>Sign Out</MenuItem>
                            </MenuList>
                        </Menu>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default TopBar