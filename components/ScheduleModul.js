import React, { useState } from 'react'
import { toast} from 'react-toastify';
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
import { UseStateContext } from '../context/UpcommingContext';
import { eventNames } from 'process';


const mySelected = { backgroundColor: '#0e78f9', }

function ScheduleModul({ setOpen, open }) {
  const [selected, setSelected] = useState(new Date());
  const [eventName, setEventName] = useState('');
  const [time1, setTime1] = useState('08:00');
  const [time2, setTime2] = useState('10:00');
  const handleOpen = () => setOpen(!open);
  const [events, setEvents, loading, error] = UseStateContext()

  const randomId = Math.floor(Math.random() * (952469103) + 172495031);
  const [copy, setCopy] = useState('copy')
  const handleCopy = (i) => {
    navigator.clipboard.writeText(randomId)
    setCopy(i)
  }

  const handleChange = (e) => {    
    setEventName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const slot = e.target.slot.value;

    const eventData = {
      name: eventName,
      date: selected,
      time1: time1,
      time2: time2,
      slot,
      meetingId: randomId,
    }  
    

    fetch('https://arcane-wave-11590.herokuapp.com/events', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        data && setEvents(data);
        setOpen(!open)
        toast.dark(`successfully added Item`);
      });
  }


  return (
    <>
      <Dialog size='xxl' className='flex !bg-[#4b69c294] items-center justify-end sm:justify-center !w-full' open={open} handler={handleOpen}>
        <div className='w-full md:w-[80%] lg:w-[60%] h-[550px] sm:h-[790px] overflow-y-auto !bg-[#1c1f2e] rounded-t-2xl md:!rounded-2xl p-3 sm:p-6'>
          <form onSubmit={handleSubmit}>
            <DialogHeader className='flex !px-0 items-center justify-between'>
              <div className='flex items-center'>
                <span className='text-white'><BsFillCalendar2DateFill /></span>
                <h3 className='text-white text-sm sm:text-2xl ml-2'>Schedule Meeting</h3>
              </div>
              <div className='flex items-center'>
                <Button onClick={handleOpen} size="sm" className="!text-grey-500 border bg-[#282c3a] border-[#262938] !px-4 capitalize flex items-center" variant="text">Cancel</Button>
                <Button type='submit' size="sm" className="!text-white ml-3 hover:bg-[#0e78f9] bg-[#0e78f9] !px-4 capitalize flex items-center" variant="text">Save</Button>
              </div>
            </DialogHeader>
            <DialogBody className='py-6 !px-0 !w-full !block border-y !text-white border-[#31364d]'>
              <input type="text" onChange={handleChange} className="w-full h-16 bg-transparent focus:border-none focus:outline-none text-xl" value={eventName} placeholder="Meeting Title" required />
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
                    <select name="slot" className='!rounded-xl w-full !text-white text-md bg-[#282c3a] border-grey-800 p-[10px]'>
                      <option value="Kiev, GMT +2">Kiev, GMT +2</option>
                      <option value="Rasia, GMT +4">Rasia, GMT +4</option>
                      <option value="Kiev, BTE +3">Kiev, BTE +3</option>
                      <option value="Usa, UTE +6" selected>Usa, UTE +6</option>
                    </select>
                  </div>

                  <div className='w-full'>
                    <div className='border-y border-[#31364d] py-6'>
                      <span className='text-grey-600 mb-2 block text-xs'>select meeting Time</span>
                      <div className='flex w-full items-center justify-between'>
                        <input onChange={() => setTime1(event.target.value)} type="time" value={time1} name="time1" className='!rounded-xl mx-auto !w-full border !text-grey-500 text-sm bg-[#282c3a] border-[#2f3449] p-2' placeholder='08:40' required />
                        <span className='mx-2 text-grey-600 text-xs'>to</span>
                        <input onChange={() => setTime2(event.target.value)} type="time" value={time2} name="time2" className='!rounded-xl mx-auto !w-full border !text-grey-500 text-sm bg-[#282c3a] border-[#2f3449] p-2' required />
                      </div>
                    </div>

                    <div className='my-6'>
                      <span className='text-grey-600 text-xs'>security passcode</span>
                      <div className='flex items-center justify-between mt-2 gap-x-3'>
                        <span className="!text-grey-500 rounded-[10px] w-full border text-sm bg-[#282c3a] border-[#2f3449] !px-4 py-[10px] capitalize flex items-center">
                          { randomId }
                        </span>
                        <div>
                         <Button onClick={() => handleCopy('coped')} size="md" className={` ${(copy === 'coped') && '!text-blue-300 !bg-blue-800'} !text-white hover:bg-[#8e44ad] bg-[#8e44ad] !px-4 capitalize flex items-center`} variant="text">{copy}</Button>
                        </div>
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
          </form>
        </div>
      </Dialog>
    </>
  )
}

export default ScheduleModul