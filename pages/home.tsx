import Image from 'next/image'
import React from 'react'
import author from '../assets/author2.jpg'
import { FiSearch } from 'react-icons/fi'
import HomeRight from '../components/HomeRight'

function HomePage() {
  return (
    <>
      <section className='p-6 pl-10 border-b border-[#272a38]'>
        <div className=''>
          <ul className='flex items-center gap-5'>
            <li className='text-white font-medium text-2xl'>Home</li>
            <li className='ml-auto grow-0 shrink-0 basis-auto'>
              <form className='relative z-10'>
                <input type="text" name="name" placeholder='Search by keyword' className='search-input' />
                <FiSearch className='search-icon' />
              </form>
            </li>
            <li className='w-14 h-14'>
              <Image src={author} alt="Author Image" width={100} height={100} objectFit='cover' quality={100} className='rounded-xl' />
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default HomePage