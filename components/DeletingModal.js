import React, { Fragment } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { toast } from 'react-toastify';
import { UseStateContext } from '../context/UpcommingContext';

const DeletingModal = ({open, event, setDeleteOpen}) => {

    const [events, setEvents, loading, error] = UseStateContext()
    const id = event._id;
    
    const deleted = events?.filter(i => i?._id !== id)

    console.log(deleted)

    const handleDelete = () => {
        fetch(`https://arcane-wave-11590.herokuapp.com/events/${id}`, {
            method: 'DELETE',
           
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                toast.dark(`${event?.name} deleted`);
                setDeleteOpen(!open);
                setEvents(deleted)
            }
        })
      };
    return (
        <Fragment>
        <Dialog className='flex !bg-[#4b69c294] items-center justify-end sm:justify-center !w-full' size='xxl' open={open} handler={setDeleteOpen}>
            <div className='w-full sm:w-[60%] lg:w-[40%] overflow-y-auto !bg-[#1c1f2e] rounded-t-2xl sm:!rounded-2xl p-3 sm:p-6'>
            <DialogHeader className='flex !text-white !px-0 items-center justify-between'>
                <h1 className='text-red-500'>Are you sure You Want Delete <span className='text-white'>{event?.name}</span> Schedule</h1>
            </DialogHeader>
            <DialogFooter className='text-left w-full'>
                <div className='flex items-center'>
                    <Button onClick={() => setDeleteOpen(!open)} size="sm" className="!text-grey-500 border bg-[#282c3a] border-grey-800 !px-4 capitalize flex items-center" variant="text">Cancel</Button>
                    <Button onClick={() => handleDelete()} size="sm" className="!text-white border ml-3 bg-red-500 hover:bg-red-500 border-grey-800 !px-4 capitalize flex items-center" variant="text">Delete</Button>
                </div>
            </DialogFooter>
            </div>
        </Dialog>
    </Fragment>
    );
};

export default DeletingModal;