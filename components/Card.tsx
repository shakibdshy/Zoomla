import React, { useState } from 'react'
import { FaVideo } from 'react-icons/fa'
import { BsPlusSquareFill } from 'react-icons/bs'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { TbScreenShare } from 'react-icons/tb'
import ScheduleModul from './ScheduleModul'
import JoinMeetingModal from './JoinMeetingModal'

function Card() {
    const [open, setOpen] = useState<boolean>(false);
    const [meetOpen, setMeetOpen] = useState<boolean>(false);
    const handleOpen = (index: number) => {
        if(index === 2){
          setOpen(!open);
        }
        else if(index === 1){
            setMeetOpen(!open)
        }
    }

    const cards = [
        {
            icon: <FaVideo />,
            title: 'New Meeting',
            short: 'set up new meeting',
        },
        {
            icon: <BsPlusSquareFill />,
            title: 'Join Meeting',
            short: 'Via invitation link'
        },
        {
            icon: <BsFillCalendarDateFill />,
            title: 'Schedule',
            short: 'plan your meeting'
        },
        {
            icon: <TbScreenShare />,
            title: 'Share Screen',
            short: 'show your work'
        },
    ]
    return (
        <div className='grid justify-center grid-cols-2 lg:gap-8 gap-5'>
            {
                cards.map((card, index) => (
                    <div key={index} onClick={() => handleOpen(index)} className='card cursor-pointer'>
                        <div className='card-icon'>{card.icon}</div>
                        <h4 className='card-title'>{card.title}</h4>
                        <p className='card-text'>{card.short}</p>
                    </div>
                ))
            }
            <ScheduleModul setOpen={setOpen} open={open} />
            <JoinMeetingModal setMeetOpen={setMeetOpen} open={meetOpen} />
        </div>
    )
}

export default Card