import React, { useState } from 'react'
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
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { DayPicker } from 'react-day-picker';

type props = {
  setOpen: (val: boolean) => void
  open: boolean
}

const mySelected = { backgroundColor: '#0e78f9', }

function ScheduleModul({ setOpen, open }: props) {

  const [selected, setSelected] = React.useState<Date>();
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog size='xxl' className='flex !bg-[#4b69c294] items-center justify-end sm:justify-center !w-full' open={open} handler={handleOpen}>
        <div className='w-full md:w-[80%] lg:w-[60%] h-[550px] sm:h-[790px] overflow-y-auto !bg-[#1c1f2e] rounded-t-2xl md:!rounded-2xl p-3 sm:p-6'>
          <DialogHeader className='flex !px-0 items-center justify-between'>
            <div className='flex items-center'>
              <span className='text-white'><BsFillCalendar2DateFill /></span>
              <h3 className='text-white text-sm sm:text-2xl ml-2'>Schedule Meeting</h3>
            </div>
            <div className='flex items-center'>
              <Button onClick={handleOpen} size="sm" className="!text-grey-500 border bg-[#282c3a] border-[#262938] !px-4 capitalize flex items-center" variant="text">Cancel</Button>
              <Button onClick={handleOpen} size="sm" className="!text-white ml-3 bg-[#0e78f9] !px-4 capitalize flex items-center" variant="text">Save</Button>
            </div>
          </DialogHeader>
          <DialogBody className='py-6 !px-0 !w-full !block border-y !text-white border-[#31364d]'>
            <h3 className='!block mb-4'>Marketing Sprit Startegy planing</h3>
            <div className='flex justify-between w-full md:border-b border-t md:flex-nowrap flex-wrap  border-[#31364d]'>
              <div className='w-full py-5'>
                <span className='text-grey-600 block text-xs !-mb-5'>select date</span>
                <div className=''>
                  <DayPicker
                    styles={{
                      day: { color: 'white', backgroundColor: '#242736', borderRadius: '10px', fontSize: '14px', padding: '-3px', margin: '1px', border: '1px solid #31364d' },
                      cell: { padding: '2px' },
                      caption: { borderBottom: '1px solid #31364d', paddingBottom: '5px', marginBottom: '5px', marginLeft: '-20px' },
                      caption_between: { paddingBottom: '5px!important' },
                      head: { color: '#626c97' },
                      dropdown_month: { backgroundColor: '#0e78f9' },
                      table: { padding: '0px', margin: '0px', marginLeft: '-20px' },
                      nav_button_next: { backgroundColor: '#242736', borderRadius: '10px', fontSize: '12px', margin: '1px', border: '1px solid #262938' },
                      nav_button_previous: { backgroundColor: '#242736', borderRadius: '10px', fontSize: '12px', marginRight: '10px', border: '1px solid #262938' }
                    }}
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    modifiersStyles={{
                      selected: mySelected,
                    }}
                  />
                </div>
              </div>
              <div className='w-full md:pl-5 md:border-l border-[#31364d]'>
                <div className='py-5 w-full'>
                  <span className='text-grey-600 mb-2 block text-xs'>select Time zone</span>
                  <select className='!rounded-xl w-full !text-white text-md bg-[#282c3a] border-grey-800 p-[10px]'>
                    <option value="Kiev, GMT +2">Kiev, GMT +2</option>
                    <option value="Kiev, GMT +2">Kiev, GMT +2</option>
                    <option value="Kiev, GMT +2">Kiev, GMT +2</option>
                    <option value="Kiev, GMT +2" selected>Kiev, GMT +2</option>
                  </select>
                </div>

                <div className='w-full'>
                  <div className='border-y border-[#31364d] py-6'>
                    <span className='text-grey-600 mb-2 block text-xs'>select meeting Time</span>
                    <div className='flex w-full items-center justify-between'>
                      <select className='!rounded-xl mx-auto !w-full border !text-grey-500 text-sm bg-[#282c3a] border-grey-800 p-2'>
                        <option value="14:00">14:00</option>
                        <option value="14:00">14:00</option>
                        <option value="14:00">14:00</option>
                        <option value="13:00" selected>13:00</option>
                      </select>
                      <span className='mx-2 text-grey-600 text-xs'>to</span>
                      <select className='!rounded-xl mx-auto !w-full border !text-grey-500 text-sm bg-[#282c3a] border-grey-800 p-2'>
                        <option value="14:00">14:00</option>
                        <option value="14:00">14:00</option>
                        <option value="14:00">14:00</option>
                        <option value="14:00" selected>14:00</option>
                      </select>
                    </div>
                  </div>

                  <div className='my-6'>
                    <span className='text-grey-600 text-xs'>security passcode</span>
                    <div className='flex items-center justify-between mt-2 gap-x-3'>
                      <span className="!text-grey-500 rounded-[10px] w-full border text-sm bg-[#282c3a] border-grey-800 !px-4 py-[6px] capitalize flex items-center">id9c25467l</span>
                      <Button size="sm" className="!text-white bg-[#8e44ad] !px-4 capitalize flex items-center" variant="text">Copy</Button>
                    </div>
                  </div>

                  <div className='flex items-center'>
                    <Checkbox className='' color="blue" defaultChecked />
                    <span className='text-grey-600 text-xs'>Waiting Room</span>
                  </div>

                </div>
              </div>
            </div>
          </DialogBody>
          <DialogFooter className='text-left !p-0 w-full'>
            <div className='w-full border-b border-[#31364d] pb-5'>
              <span className='text-grey-600 text-xs'>Meeting Id</span>
              <div className='sm:flex justify-between items-center'>
                <Radio className='border !text-grey-300 border-grey-800' name="type" label="Generate Automatically" defaultChecked />
                <Radio className='border !text-grey-300 border-grey-800' name="type" label="Personal Meeting Id 12364 12k" />
              </div>
            </div>

            <div className='text-left w-full'>
              <span className='text-grey-600 text-xs'>Video</span>
              <div className='w-full !text-grey-300 sm:flex justify-between items-center'>
                <div className='text-left w-full flex items-center '>
                  <span className=' block text-xs mr-2'>Host:</span>
                  <Radio className='border border-grey-800' name="host" label="host" defaultChecked />
                  <Radio className='border border-grey-800' name="host" label="of" />
                </div>

                <div className='!text-right w-full flex items-center sm:justify-end'>
                  <span className=' block text-xs mr-2'>Participants:</span>
                  <Radio className='border border-grey-800' name="participants" label="on" defaultChecked />
                  <Radio className='border border-grey-800' name="participants" label="of" />
                </div>
              </div>
            </div>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  )
}

export default ScheduleModul