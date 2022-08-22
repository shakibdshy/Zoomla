/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ChannelList } from 'stream-chat-react';
import Cookies from 'universal-cookie';
// import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import ZoomlaIcon from '../../assets/zoompost.jpg'
import LogoutIcon from '../../assets/logout.png'
import ChannelSearch from './ChannelSearch';
import TeamChannelList from './TeamChannelList';


const SideBar = () => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={ZoomlaIcon} alt="Zoomla Icon" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
          <img src={LogoutIcon} alt="Logout Icon" width="30" />
        </div>
      </div>
    </div>
  )
}

const CompanyHeader = () => { 
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Zoomla</p>
    </div>
  )
}

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filter={{}}
          ChannelRenderFilterFn={() => {} }
          List={(listProps) => (
            <TeamChannelList {...listProps} type="team" />
          )}
        />
      </div>
    </>
  )
}

export default ChannelListContainer