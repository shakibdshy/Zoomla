import {   Accordion, AccordionBody, Button } from '@material-tailwind/react';
import Image from 'next/image';
import React, { Fragment, useState } from 'react'
import { BiChevronRight, BiChevronDown } from 'react-icons/bi'

// type propsData = {
//   name: string;
//   user: {
//       name: string;
//       img: any;
//   }[];
// }



function Accordions({contactsUser}: any) {

    const [open, setOpen] = useState(0);
    
    const handleOpen = (value:number) => {
      setOpen(open === value ? 0 : value);
    };

  return (
    <div>
        <Fragment>
            <Accordion className="" open={open === 1} onClick={() => handleOpen(1)}>
            <div className={`${(open === 1) && "bg-[#212534] , text-[18px]"} hover:bg-[#212534] !text-grey-500 flex rounded-lg p-1 justify-between items-center font-bold`}>
                <div className='flex items-center'>
                <span className='text-[24px] font-bold mr-2'>{!(open === 1)? <BiChevronRight /> : <BiChevronDown />}</span>
                {contactsUser?.name}
                </div>
                <Button size="sm" className="!text-grey-500 !text-sm font-bold bg-[#282c3a] border border-[#4d4c4c] lowercase" variant="text">{contactsUser?.user.length}</Button>
            </div>

            <AccordionBody className='text-white'>
                <div className='ml-[30px]'>
                  {
                    contactsUser?.user?.map(i => (
                      <>
                        <div className='flex items-center cursor-pointer text-grey-500 hover:text-white rounded-lg hover:bg-[#0e78f9] p-1.5 gap-1'>
                          <Image
                              className='rounded-lg w-full mx-auto'
                              src={i.img}
                              alt="user"
                              width={36}
                              height={40}
                          />
                          <p className='ml-2 text-sm'>{i.name}</p> 
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

export default Accordions;