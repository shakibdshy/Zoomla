import { Button, Checkbox } from "@material-tailwind/react";
import React from "react";
import Link from "next/link";
import { BsChevronLeft, BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

function signIn() {
  return (
    <div className="section max-w-2xl bg-white h-auto mx-auto">
      <div className="title">
        <h1 className="text-4xl text-[#83bbff] font-bold text-center my-8 flex justify-center">
          Zoomla
        </h1>
      </div>
      <form className="grid justify-items-center gap-y-4">
        <input
          className="border border-[#83bbff] px-24 py-2 ruonded-lg"
          type="text"
          name="email"
          placeholder="Enter Your Email"
        />
        <input
          className="border border-stone-400 px-24 py-2 rounded-lg"
          type="text"
          name="password"
          placeholder="Enter Your Password"
        />
        <Button className="px-36 bg-slate-300" variant="outlined">
          Sign In
        </Button>
      </form>
      <div className="checkbox flex justify-center items-center font-normal mt-5">
        <Checkbox defaultChecked />
        <h2>Keep me signed in</h2>
      </div>
      <div className="flex justify-center items-center gap-3">
        <hr className="w-full h-[1px] bg-grey-300 border-none" />
        <h2 className="grow-0 shrink-0 basis-auto m-5">or Sign In with</h2>
        <hr className="w-full h-[1px] bg-grey-300 border-none" />
      </div>
      <div className="grid justify-items-center">
        <ul className="flex gap-6">
          <li className="">
            <FcGoogle/>
            Google</li>
          <li>
            <BsFacebook />
            Facebook</li>
          <li>
            <BsGithub />
            GitHub</li>
        </ul>
      </div>
      <div className="flex justify-between">
        <p className="flex justify-center items-center ml-10 m-10 gap-x-2">
          <Link href='/'>
          <a><BsChevronLeft/></a>
          </Link>
          Back</p>
        <p className="text-[#83bbff] mr-10 m-10">Sign Up</p>
      </div>
    </div>
  );
}

export default signIn;
