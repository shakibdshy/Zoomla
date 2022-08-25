/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Channel, MessageTeam } from 'stream-chat-react';

import { ChannelInner, CreateChannel, EditChannel } from './';

const ChannelContainer = () => {
  return (
    <div>
      <ChannelInner />
      <CreateChannel />
    </div>
  )
}

export default ChannelContainer