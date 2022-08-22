/* eslint-disable prettier/prettier */
import { Accordion, AccordionBody, Button } from '@material-tailwind/react';
import Head from 'next/head';
import Image from 'next/image';
import React, { Fragment, useState } from 'react'
import { BiChevronRight, BiChevronDown, BiMessageRoundedDots } from 'react-icons/bi'

// interface DataProps {
//   data: {
//     id: number;
//     name: string;
//     img: StaticImageData;
//   }[]
// }

function MassageAcccordion({ data }) {

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen((open === value) ? 0 : value);
  };

  return (
    <div>
      <Fragment>
        <Head>
          <title>Meeting Room</title>
        </Head>

        <Accordion className="" open={open === 1} onClick={() => handleOpen(1)}>
          <div className={`${(open === 1) && "bg-[#212534] , text-[18px]"} hover:bg-[#212534] !text-gray-500 flex rounded-lg p-2 justify-between items-center font-bold`}>
            <p className='text-white flex items-center font-bold'>
              <span className='text-xl text-gray-500'><BiMessageRoundedDots /></span>
              <span className='ml-2'>chat</span>
            </p>
            <div className='flex items-center'>
              <span className='text-[24px] font-bold mr-2'>{!(open === 1) ? <BiChevronRight /> : <BiChevronDown />}</span>
            </div>
          </div>

          <AccordionBody className='text-white'>
            <div className='max-h-[420px] overflow-auto'>
              {
                data.map(i => (
                  <>
                    <div className='flex cursor-pointer text-gray-500 hover:text-white rounded-lg p-1.5 my-2 gap-3'>
                      <div>
                        <Image
                          className='rounded-lg w-full mx-auto'
                          src={i.img}
                          alt="user"
                          width={36}
                          height={40}
                        />
                      </div>
                      <div className='w-full'>
                        <div className='flex w-full pl-3 -mt-3 justify-between'>
                          <p className='text-xs'>{i.name}</p>
                          <span className='text-xs'>10:20</span>
                        </div>
                        <div className='text-gray-400'>
                          <p className='text-sm p-2 px-3 my-1 inline-block border border-[#2d303d] rounded-2xl bg-[#212534]'>This is Meeting Room 🙂</p>
                        </div>
                        <div className='text-gray-400'>
                          <p className='text-sm p-2 my-1 px-3 inline-block border border-[#2d303d] rounded-2xl bg-[#212534]'>How are you 😀🙋‍♂️</p>
                        </div>
                      </div>
                    </div>
                  </>
                ))
              }
            </div>
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  )
}

export default MassageAcccordion