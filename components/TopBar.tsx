import Image from 'next/image'
import React from 'react'
import author from '../assets/author2.jpg'
import { FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/router';

function TopBar() {
    const { asPath } = useRouter();  
  return (
      <section className='p-1 sm:p-3 bg-dark fixed top-0 left-0 sm:pl-10 pl-3 w-full border-b border-grey-800'>
          <div className=''>
              <ul className='flex items-center gap-x-2 sm:gap-x-5'>
                  <li className='text-white font-medium text-2xl sm:pl-20 capitalize'>{asPath.slice(1)}</li>
                  <li className='ml-auto grow-0 shrink-0 basis-auto'>
                      <form className='relative z-10'>
                          <input type="text" name="name" placeholder='Search by keyword' className='search-input' />
                          <FiSearch className='search-icon' />
                      </form>
                  </li>
                  <li className='w-14 h-14'>
                      <Image src={author} alt="Author Image" width={60} height={60} objectFit='cover' quality={100} className='rounded-xl' />
                  </li>
              </ul>

          </div>
      </section>
  )
}

export default TopBar