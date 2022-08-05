import { Button, Checkbox } from "@material-tailwind/react";
import React from "react";
import { useRouter } from 'next/router';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Link from "next/link";
import { BsChevronLeft, BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import auth from "../firebase/firebase.init";
import Loading from "../components/Loading";

function SignUp() {

    const router = useRouter();
    const [updateProfile, updating, updateeError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (loading) {
        return <Loading />
    }

    if (user) {
        router.replace("/home")
    }


    const handaleSubmite = async (e: any) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    return (
        <div className="flex justify-center w-full h-screen items-end sm:items-center">
            <div className="p-5 sm:p-12 pb-0 section w-full sm:max-w-2xl bg-[#232634] h-auto mx-auto shadow-lg rounded-t-2xl sm:rounded-2xl">
                <div className="title">
                    <h1 className="sm:text-4xl text-3xl text-[#83bbff] font-bold text-center pt-5 sm:pt-14 pb-4 sm:pb-8 flex justify-center">
                        Zoomla - Sign Up
                    </h1>
                </div>
                <form onSubmit={handaleSubmite} className="grid justify-items-center gap-y-4">
                    <input type="text" name="name" placeholder='Enter Your Name' className='search-input shadow-md py-4 pl-8' />
                    <input type="text" name="email" placeholder='Enter Your Email' className='search-input shadow-md py-4 pl-8' />
                    <input type="password" name="password" placeholder='Enter Your Password' className='search-input shadow-md py-4 pl-8' />
                    <input type="submit" value="Sign Up" className="text-white cursor-pointer font-bold py-2 bg-blue-500 rounded-lg w-1/2" />
                </form>
                <p className="text-red-500 text-center mt-2">{error?.message || updateeError?.message}</p>
                <div className="checkbox flex justify-center items-center font-normal mt-5">
                    <Checkbox defaultChecked />
                    <h2 className='text-white'>Keep me signed Up</h2>
                </div>
                <div className="flex justify-between">
                    <Link href='/signIn'>
                        <a className="flex justify-center items-center ml-5 sm:ml-10 m-10 gap-x-2 text-white"><BsChevronLeft /> Back</a>
                    </Link>
                    <Link href='/signIn'>
                        <a className="text-[#83bbff] mr-5 sm:mr-10 m-10">Sign In</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
