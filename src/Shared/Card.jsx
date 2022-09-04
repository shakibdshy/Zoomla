/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { FaVideo } from 'react-icons/fa'
import { BsPlusSquareFill, BsFillCalendarDateFill } from 'react-icons/bs'
import Cookies from "universal-cookie";
import { TbScreenShare } from 'react-icons/tb'
import JoinMeetingModal from './JoinMeetingModal'
import { Link } from 'react-router-dom'
import ScheduleModul from './ScheduleModul'

const cookies = new Cookies();

function Card() {
    const [open, setOpen] = useState(false);
    const [meetOpen, setMeetOpen] = useState(false);

    const createMeeting = async (e) => {
        await fetch('https://prod-in2.100ms.live/api/v2/rooms', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + cookies.get('hmsToken'),
                'Content-Type': 'application/json'
            },
            // body: '{"name": "test-room", "description": "This is a test room", "recording_info": {"enabled": true, "upload_info": {"type": "s3", "location": "test-bucket", "prefix": "test-prefix", "options": {"region": "ap-south-1"}, "credentials": {"key": "aws-access-key", "secret": "aws-secret-key"}}}}',
            body: JSON.stringify({
                'name': 'test-room',
                'description': 'This is a test room',
                'recording_info': {
                    'enabled': true,
                    'upload_info': {
                        'type': 's3',
                        'location': 'test-bucket',
                        'prefix': 'test-prefix',
                        'options': {
                            'region': 'ap-south-1'
                        },
                        'credentials': {
                            'key': 'aws-access-key',
                            'secret': 'aws-secret-key'
                        }
                    }
                }
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    const handleOpen = (index) => {
        if (index === 2) {
            setOpen(!open);
        }
        else if (index === 1) {
            setMeetOpen(!open)
        }
    }

    const cards = [
        {
            link: '',
            icon: <FaVideo />,
            title: 'New Meeting',
            short: 'set up new meeting',
        },
        {
            link: '',
            icon: <BsPlusSquareFill />,
            title: 'Join Meeting',
            short: 'Via invitation link'
        },
        {
            link: '',
            icon: <BsFillCalendarDateFill />,
            title: 'Schedule',
            short: 'plan your meeting'
        },
        {
            link: '',
            icon: <TbScreenShare />,
            title: 'Share Screen',
            short: 'show your work'
        },
    ]
    return (
        <div className='grid justify-center grid-cols-2 md:gap-8 gap-5 max-w-xl mx-auto'>
            <Link to="/" onClick={() => createMeeting()} className='card cursor-pointer'>
                <div className='card-icon'><TbScreenShare /></div>
                <h4 className='card-title'>New Meeting</h4>
                <p className='card-text'>Via invitation link</p>
            </Link>
            {
                cards.map((card, index) => (
                    <Link to={card.link} key={index} onClick={() => handleOpen(index)} className='card cursor-pointer'>
                        <div className='card-icon'>{card.icon}</div>
                        <h4 className='card-title'>{card.title}</h4>
                        <p className='card-text'>{card.short}</p>
                    </Link>
                ))
            }
            <ScheduleModul setOpen={setOpen} open={open} />
            <JoinMeetingModal setMeetOpen={setMeetOpen} open={meetOpen} />
        </div>
    )
}

export default Card