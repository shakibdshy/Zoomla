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
import { useMantineColorScheme } from "@mantine/core";

function JoinMeetingModal({ setMeetOpen, open }) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
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
        className={` ${dark ? "!bg-[#4b69c294]" : "!bg-[#0509157a]"} flex !bg-[#4b69c294] items-center justify-end sm:justify-center !w-full`}
        size="xxl"
        open={open}
        handler={handleOpen}
      >
        <div className={`${dark ? "!bg-[#1c1f2e] text-white" : "!bg-[#fff] text-[#000]"} w-full sm:w-[60%] lg:w-[40%] h-[340px] overflow-y-auto !bg-[#1c1f2e] rounded-t-2xl sm:!rounded-2xl p-3 sm:p-6`}>
          <DialogHeader className="flex !text-white !px-0 items-center justify-between">
            <h1 className={`${dark ? "text-[#fff]" : "text-[#000]"} text-2xl`}>Join A Meeting</h1>
          </DialogHeader>
          <DialogBody className={` ${dark ? "border-[#3f445d]" : "border-[#e8eaf5]"} py-6 !px-0 !w-full !block border-y !text-white`}>
            <div className="w-full">
              <input
                className={`${dark ? "border-[#2d303d] bg-[#212534] text-[#b1afaf]" : "text-[#0e78f9] border-[#c2daf8]"} border mb-4 w-full px-4 text-center py-3 rounded-xl outline-0 `}
                type="text"
                name=""
                value={meetingId}
                onChange={() => setMeetingId(event.target.value)}
                placeholder="Meeting ID"
                id=""
              />
              <input
                className={`${dark ? "border-[#2d303d] bg-[#212534] text-[#b1afaf]" : "text-[#0e78f9] border-[#c2daf8]"} border w-full px-4 text-center py-3 rounded-xl outline-0 `}
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
                className={` ${dark ? "bg-[#282c3a] text-gray-500" : "!bg-[#eff6ff] text-[#0e78f9]"} !px-4 capitalize flex items-center`}
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
