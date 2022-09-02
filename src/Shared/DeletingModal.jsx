/* eslint-disable prettier/prettier */
import React, { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { UseFeedContext, UseStateContext } from "../context/UpcomingContext";
import { LoadingOverlay, useMantineColorScheme } from "@mantine/core";

const DeletingModal = ({ open, method, event, setDeleteOpen }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [events, setEvents] = UseStateContext();
  const [Feeds, setFeed] = UseFeedContext()
  const id = event?._id;
  const [visible, setVisible] = useState(false);
  const existEvents = events?.filter(i => i?._id !== id);
  const exsitFeeds = Feeds?.filter(i => i?._id !== id);


  const handleDelete = () => {
    setVisible(true)
    fetch(`https://zoomla-backend.herokuapp.com/${method}/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          toast.dark(`Delete successfully`);
          setVisible(false)
          setDeleteOpen(!open);
          setEvents(existEvents);
          setFeed(exsitFeeds);
        }
      });
  };

  return (
    <Fragment>
      <Dialog
        className={`${dark ? "!bg-[#4b69c294]" : "!bg-[#0509157a]"} flex !bg-[#4b69c250] items-center justify-end sm:justify-center !w-full`}
        size="xxl"
        open={open}
        handler={setDeleteOpen}
      >
        <div className={`${dark ? "!bg-[#1c1f2e] text-white" : "!bg-[#fff] text-[#000]"} w-full sm:w-[60%] lg:w-[40%] overflow-y-auto !bg-[#1c1f2e] rounded-t-2xl sm:!rounded-2xl p-3 sm:p-6`}>
          <LoadingOverlay visible={visible} overlayBlur={2} />
          <DialogHeader className="flex !text-white !px-0 items-center justify-between">
            <h1 className="text-red-500 !text-xl">
              Are you sure You Want Delete This {(method === 'events') ? 'Schedule List' : "Post"}
            </h1>
          </DialogHeader>
          <DialogFooter className="text-left w-full">
            <div className="flex items-center">
              <Button
                onClick={() => setDeleteOpen(!open)}
                size="sm"
                className={` ${dark ? "bg-[#282c3a] text-gray-500" : "!bg-[#eff6ff] text-[#0e78f9]"} !px-4 capitalize flex items-center`}
                variant="text"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete()}
                size="sm"
                className="!text-white border ml-3 bg-red-500 hover:bg-red-500 border-gray-800 !px-4 capitalize flex items-center"
                variant="text"
              >
                Delete
              </Button>
            </div>
          </DialogFooter>
        </div>
      </Dialog>
    </Fragment>
  );
};

export default DeletingModal;
