/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { Popover } from '@mantine/core';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { TbMessageDots } from 'react-icons/tb';
import { format } from 'date-fns';
import { UseFeedContext, UseUserContext } from '../context/UpcomingContext';
import DeletingModal from './DeletingModal';
import { FaRegPaperPlane } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import UpdatePostModal from './UpdatePostModal';
import AllLikeComments from './AllLikesCommentsModal';


const FeedCard = ({ FeedPosts }) => {
    const [currentUser, users] = UseUserContext();
    const [Feeds, setFeed] = UseFeedContext();
    const [updateOpen, setUpdateOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [likeOpen, setLikeOpen] = useState(false);
    const [likeComment, setLikeComment] = useState()
    const [comment, setComment] = useState()
    const [like, setLike] = useState()
    const [event, setEvent] = useState();
    const [likeEmail, setLikeEmail] = useState();
    const method = 'feedPost'

    const handleOpen = (p, method) => {
        if (method === 'update') {
            setUpdateOpen(!updateOpen);
            setEvent(p)
        }
        if (method === 'delete') {
            setDeleteOpen(!deleteOpen);
            setEvent(p)
        }
    }
    const handleLikeComment = (p) => {
        setLikeOpen(!likeOpen);
        setLikeComment(p)
    }

    const PostUser = (email) => users?.find(u => u?.email?.includes(email));


    console.log(comment)
    const handleLike = (email, id) => {
        setLike(id)

        Feeds?.map(i => {
            const like = i?.likes?.find(l => l?.email?.includes(email))
            setLikeEmail(like?.email);
            console.log(like?.email)
        })


        if (email !== likeEmail) {
            fetch(`https://arcane-wave-11590.herokuapp.com/like/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setFeed(data)
                    }
                })
        }
    }
    const handleComment = (e, email, id) => {
        e.preventDefault();
        if (comment) {
            fetch(`https://arcane-wave-11590.herokuapp.com/comment/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email, comment })
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setFeed(data);
                    }
                })
        }
    }

    return (
        <div className='w-full feedCard'>
            {
                FeedPosts?.map(p => (
                    <>
                        <div className='rounded-[24px] w-full h-auto text-white border bg-[#212534] border-[#262938]  p-[10px]'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    {(PostUser(p.email)?.img) && (
                                        <div className='w-[36px] h-[36px] bottom-[-20px] rounded-full ring-2 cursor-pointer ring-offset-2 ring-blue-600'>
                                            <img src={PostUser(p.email)?.img} className="w-[36px] h-[36px] rounded-full" alt="user" />
                                        </div>
                                    )}
                                    {!(PostUser(p.email)?.img) && (
                                        <div className="w-[26px] h-[36] ring-2 cursor-pointer ring-offset-2 ring-blue-800 rounded-full bg-blue-600 flex items-center justify-center">
                                            <h1 className="text-xl text-white font-bold">
                                                {p?.name?.slice(0, 1)}
                                            </h1>
                                        </div>
                                    )}
                                    <div className='ml-2'>
                                        <h4 className='capitalize mb-[-2px]'>{p?.name}</h4>
                                        <small className='text-xm block text-gray-500 mt-[-3px]'>{PostUser(p.email)?.address}</small>
                                    </div>
                                </div>
                                <Menu placement="bottom-end">
                                    <MenuHandler>
                                        <Button
                                            size="sm"
                                            className="!text-gray-500 bg-none text-xl"
                                            variant="text"
                                        >
                                            <BsThreeDots />
                                        </Button>
                                    </MenuHandler>
                                    <MenuList onClick={() => handleOpen(p, 'update')} className="bg-[#272b39] shadow-sm border-transparent">
                                        <MenuItem className="text-gray-400 hover:bg-[#242736] hover:text-gray-500 hover:shadow-md">
                                            Edit
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => handleOpen(p, 'delete')}
                                            className="text-gray-400 hover:bg-[#242736] hover:text-gray-500 hover:shadow-md"
                                        >
                                            Delete
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </div>

                            <div className='w-full max-h-[400px] overflow-y-auto rounded-2xl mb-[10px] my-[16px]'>
                                <img src={p.img} className='w-full rounded-2xl' alt="post img" />
                            </div>

                            <div className='flex items-center justify-between'>
                                <ul className='flex items-center gap-x-3'>
                                    <li onClick={() => handleLike(currentUser?.email, p?._id)} className="text-gray-400 text-[20px] cursor-pointer">
                                        <span>
                                            {
                                                ((like === p?._id) || (currentUser?.email === p?.likes?.find(l => l?.email?.includes(currentUser?.email))?.email)) ?
                                                    <FcLike /> :
                                                    <FcLikePlaceholder />
                                            }
                                        </span>
                                    </li>
                                    <li className="text-gray-400 text-[20px] cursor-pointer">
                                        <Popover width={250} trapFocus position="bottom, end" withArrow shadow="md">
                                            <Popover.Target>
                                                <span><TbMessageDots /></span>
                                            </Popover.Target>
                                            <Popover.Dropdown className='p-1 bg-[#242836] rounded-xl border-[#383e55] '>
                                                <form onSubmit={(e) => handleComment(e, currentUser?.email, p?._id)}>
                                                    <textarea required onChange={(e) => setComment(e.target.value)} className="!text-gray-500 border text-sm !w-full px-3 !py-[5px] rounded-[10px] outline-0 border-[#2d303d] bg-[#252a3d]" placeholder="Comment"></textarea>
                                                    <div className='mb-2 flex justify-end'>
                                                        {/* <Button onClick={() => handleComment(currentUser?.email, p?._id)} size="sm" className="!text-gray-500 bg-[#2e3446] border border-[#262938] text-xs shadow-md">send</Button> */}
                                                        <input type="submit" value="Sent" className="!text-white border text-sm px-4 !py-[5px] cursor-pointer rounded-[14px] outline-0 border-[#8699ef] bg-[#3a7ef4]" />
                                                    </div>
                                                </form>
                                            </Popover.Dropdown>
                                        </Popover>
                                    </li>
                                    <li className="text-gray-400 text-[20px] cursor-pointer">
                                        <span><FaRegPaperPlane /></span>
                                    </li>
                                </ul>
                                <div>
                                    <div className="text-gray-400 text-[20px] cursor-pointer">
                                        <span><FiBookmark /></span>
                                    </div>
                                </div>
                            </div>

                            <div className='my-2'>
                                <div className='flex items-center justify-between '>
                                    {p?.likes && <p onClick={() => handleLikeComment(p)} className='text-gray-500 cursor-pointer text-sm capitalize'>Liked by
                                        <span className='capitalize'> {p?.likes?.[p?.likes?.length - 1]?.email.slice(0, 5)} </span>
                                        {(p?.likes?.length > 1) && <span>and {p?.likes?.length - 1} others</span>}
                                    </p>}
                                    {!(p?.likes) && <p className='text-gray-500 text-sm capitalize'>no like available</p>}
                                </div>
                                <div className='flex items-center'>
                                    {p?.title && <p className='text-sm text-gray-300'>"{p?.title.slice(0, 40)}</p>}
                                    {(p?.title?.length > 40) && <p className='text-sm cursor-pointer text-blue-gray-500'>...more</p>}
                                </div>
                                {p?.comments && <div onClick={() => handleLikeComment(p)} className='flex cursor-pointer items-center'>
                                    {(PostUser(p?.comments?.[p?.comments.length - 1]?.email)?.img) && <div>
                                        <img src={PostUser(p?.comments?.[p?.comments.length - 1]?.email)?.img} className="w-[12px] h-[12px] rounded-full" alt="user" />
                                    </div>}
                                    <p className='text-sm mx-1 capitalize font-bold text-white'>{p?.comments?.[p?.comments.length - 1]?.email.slice(0, 5)} </p>
                                    <p className='text-sm text-gray-500'> {p?.comments?.[p?.comments.length - 1]?.comment.slice(0, 40)}</p>
                                </div>}
                                {p?.date && <small className='text-xs text-gray-500'>{format(new Date(p?.date), 'PP')}</small>}
                            </div>
                        </div>
                    </>
                ))
            }
            <AllLikeComments open={likeOpen} post={likeComment} setLikeOpen={setLikeOpen} />
            <UpdatePostModal
                setUpdatePostOpen={setUpdateOpen}
                post={event}
                open={updateOpen}
            />
            <DeletingModal
                setDeleteOpen={setDeleteOpen}
                event={event}
                method={method}
                open={deleteOpen}
            />
        </div>
    );
};

export default FeedCard;