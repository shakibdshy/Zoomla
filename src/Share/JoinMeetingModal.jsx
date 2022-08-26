/* eslint-disable no-restricted-globals */
/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function JoinMeetingModal({ setMeetOpen, open }) {
  const navigate = useNavigate();
  const [meetingId, setMeetingId] = useState('62e9232ec166400656965011');
  const [meetingRole, setMeetingRole] = useState('guest');

  const handleOpen = id => {
    setMeetOpen(!open);
    if (id === 1) {
      navigate(`/meeting/${meetingId}/${meetingRole}`);
    }
  };

  return (
    <Fragment>
      <Dialog
        className="flex !bg-[#4b69c294] items-center justify-end sm:justify-center !w-full"
        size="xxl"
        open={open}
        handler={handleOpen}
      >
        <div className="w-full sm:w-[60%] lg:w-[40%] h-[320px] overflow-y-auto !bg-[#1c1f2e] rounded-t-2xl sm:!rounded-2xl p-3 sm:p-6">
          <DialogHeader className="flex !text-white !px-0 items-center justify-between">
            <h1 className="text-2xl">Join A Meeting</h1>
          </DialogHeader>
          <DialogBody className="py-6 !px-0 !w-full !block border-y !text-white border-[#31364d]">
            <div className="w-full">
              <input
                className="!text-gray-500 mb-4 border w-full px-4 text-center py-2 rounded-xl outline-0 border-[#2d303d] bg-[#212534]"
                type="text"
                name=""
                value={meetingId}
                onChange={ () => setMeetingId(event.target.value) }
                placeholder="Meeting ID"
                id=""
              />
              <input
                className="!text-gray-500 border w-full px-4 text-center py-2 rounded-xl outline-0 border-[#2d303d] bg-[#212534]"
                type="text"
                name=""
                value={meetingRole}
                onChange={() => setMeetingRole(event.target.value)}
                placeholder="Host"
                id=""
              />
            </div>
          </DialogBody>
          <DialogFooter className="text-left w-full">
            <div className="flex items-center">
              <Button
                onClick={() => handleOpen(2)}
                size="sm"
                className="!text-gray-500 border bg-[#282c3a] border-gray-800 !px-4 capitalize flex items-center"
                variant="text"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleOpen(1)}
                size="sm"
                className="!text-white border ml-3 bg-[#0e78f9] border-gray-800 !px-4 capitalize flex items-center"
                variant="text"
              >
                Join
              </Button>
            </div>
          </DialogFooter>
        </div>
      </Dialog>
    </Fragment>
  );
}

export default JoinMeetingModal;
