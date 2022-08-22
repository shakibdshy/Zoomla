import { Accordion, AccordionBody, Button } from "@material-tailwind/react";
import React, { Fragment, useState } from "react";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";

function Accordions({ contactsUser }) {
  const [open, setOpen] = useState(0);

  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <Fragment>
        <Accordion className="" open={open === 1} onClick={() => handleOpen(1)}>
          <div
            className={`${
              open === 1 && "bg-[#212534] , text-[18px]"
            } hover:bg-[#212534] !text-gray-500 flex rounded-lg p-1 justify-between items-center font-bold`}
          >
            <div className="flex items-center">
              <span className="text-[24px] font-bold mr-2">
                {!(open === 1) ? <BiChevronRight /> : <BiChevronDown />}
              </span>
              {contactsUser?.name}
            </div>
            <Button
              size="sm"
              className="!text-gray-500 !text-sm font-bold bg-[#282c3a] border border-[#4d4c4c] lowercase"
              variant="text"
            >
              {contactsUser?.user.length}
            </Button>
          </div>

          <AccordionBody className="text-white">
            <div className="ml-[30px]">
              {contactsUser?.user?.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="flex justify-start items-center cursor-pointer text-gray-500 hover:text-white rounded-lg hover:bg-[#0e78f9] p-1.5 gap-1"
                  >
                    <img
                      className="rounded-lg w-[36px] h-[40px]"
                      src={item.img}
                      alt="user"
                    />
                    <p className="ml-2 text-sm">{item.name}</p>
                  </div>
                </>
              ))}
            </div>
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}

export default Accordions;
