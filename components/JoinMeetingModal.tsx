import React, { Fragment } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Select,
    Option,
    Checkbox,
    Radio,
  } from "@material-tailwind/react";

  type props = {
    setMeetOpen: (val: boolean) => void
    open: boolean
 }

function JoinMeetingModal({setMeetOpen, open}: props) {

    const handleOpen = () => setMeetOpen(!open);
    
  return (
    <Fragment>
      <Dialog className='!bg-[#1c1f2e] !rounded-2xl p-6 !w-full' size='md' open={open} handler={handleOpen}>
        <DialogHeader className='flex !text-white !px-0 items-center justify-between'>
            <h1>Join A Meeting</h1>
        </DialogHeader>
        <DialogBody className='py-6 !px-0 !w-full !block border-y !text-white border-[#31364d]'>
            <h1>Hello</h1>
        </DialogBody>
        <DialogFooter className='text-left w-full'>
            <div className='flex items-center'>
              <Button onClick={handleOpen} size="sm" className="!text-grey-500 border bg-[#282c3a] border-grey-800 !px-4 capitalize flex items-center" variant="text">Cancel</Button> 
              <Button onClick={handleOpen} size="sm" className="!text-white border ml-3 bg-[#0e78f9] border-grey-800 !px-4 capitalize flex items-center" variant="text">Join</Button> 
            </div>
        </DialogFooter>
      </Dialog>
    </Fragment>
  )
}

export default JoinMeetingModal