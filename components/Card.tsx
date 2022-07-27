import React from 'react'
import { FaVideo } from 'react-icons/fa'
import { BsPlusSquareFill } from 'react-icons/bs'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { TbScreenShare } from 'react-icons/tb'

function Card() {
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
        <div className='grid justify-center grid-cols-2 md:gap-8 gap-5 max-w-xl mx-auto'>
            {
                cards.map((card, index) => (
                    <div key={index} className='card'>
                        <div className='card-icon'>{card.icon}</div>
                        <h4 className='card-title'>{card.title}</h4>
                        <p className='card-text'>{card.short}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Card