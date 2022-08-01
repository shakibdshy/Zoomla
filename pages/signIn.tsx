import { Button, Checkbox } from "@material-tailwind/react";
import React from "react";
import Link from "next/link";
import { BsChevronLeft, BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

function signIn() {
  return (
    <div className="p-12 pb-0 section max-w-2xl bg-[#232634] h-auto mt-20 mx-auto shadow-lg rounded-2xl">
      <div className="title">
        <h1 className="text-4xl text-[#83bbff] font-bold text-center pt-14 pb-8 flex justify-center">
          Zoomla
        </h1>
      </div>
      <form className="grid justify-items-center gap-y-4">
        <input type="text" name="name" placeholder='Enter Your Email' className='search-input shadow-md py-4 pl-8' />
        <input type="text" name="name" placeholder='Enter Your Password' className='search-input shadow-md py-4 pl-8' />
        <Button className="px-36 bg-slate-300">
          Sign In
        </Button>
      </form>
      <div className="checkbox flex justify-center items-center font-normal mt-5">
        <Checkbox defaultChecked />
        <h2 className='text-white'>Keep me signed in</h2>
      </div>
      <div className="flex justify-center items-center gap-3">
        <hr className="w-full h-[1px] bg-grey-300 border-none" />
        <h2 className="grow-0 shrink-0 basis-auto m-5 text-white">or Sign In with</h2>
        <hr className="w-full h-[1px] bg-grey-300 border-none" />
      </div>
      <div className="grid justify-items-center mt-8">
        <ul className="flex gap-8">
          <li className="flex flex-col items-center justify-center text-white">
            <FcGoogle className="text-xl" />
            Google</li>
          <li className="flex flex-col items-center justify-center text-white">
            <BsFacebook className="text-xl" />
            Facebook</li>
          <li className="flex flex-col items-center justify-center text-white">
            <BsGithub className="text-xl" />
            GitHub</li>
        </ul>
      </div>
      <div className="flex justify-between">
        <Link href='/'>
          <a className="flex justify-center items-center ml-10 m-10 gap-x-2 text-white"><BsChevronLeft /> Back</a>
        </Link>
        <Link href='/'>
          <a className="text-[#83bbff] mr-10 m-10">Sign Up</a>
        </Link>
      </div>
    </div>
  );
}

export default signIn;
