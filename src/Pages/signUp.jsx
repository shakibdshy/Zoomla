/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import { Checkbox } from "@material-tailwind/react";
import React from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { BsChevronLeft } from "react-icons/bs";
import auth from "../../firebase/firebase.init";
import Loading from "../Share/Loading";
import { Link, useNavigate } from "react-router-dom";
import { UseUserContext } from "../context/UpcommingContext";

function SignUp() {
    const [, , setUser] = UseUserContext();
    const navigate = useNavigate();
    const [updateProfile, updating, updateeError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    if (loading || updating) {
        return <Loading />
    }

    if (user) {
        navigate("/")
        const email = user?.user.email;
        const name = user?.user.displayName;
        fetch(`https://arcane-wave-11590.herokuapp.com/user`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, name })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setUser(data)
                }
            })
    }


    const handaleSubmite = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

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
                    <input type="text" name="name" placeholder='Enter Your Name' required className='search-input shadow-md py-4 pl-8' />
                    <input type="text" name="email" placeholder='Enter Your Email' required className='search-input shadow-md py-4 pl-8' />
                    <input type="password" name="password" placeholder='Enter Your Password' required className='search-input shadow-md py-4 pl-8' />
                    <input type="submit" value="Sign Up" className="text-white cursor-pointer font-bold py-2 bg-blue-500 rounded-lg w-1/2" />
                </form>
                <p className="text-red-500 text-center mt-2">{error?.message || updateeError?.message}</p>
                <div className="checkbox flex justify-center items-center font-normal mt-5">
                    <Checkbox defaultChecked />
                    <h2 className='text-white'>Keep me signed Up</h2>
                </div>
                <div className="flex justify-between">
                    <Link to='/'>
                        <span className="flex justify-center items-center ml-5 sm:ml-10 m-10 gap-x-2 text-white"><BsChevronLeft /> Back</span>
                    </Link>
                    <Link to='/signIn'>
                        <span className="text-[#83bbff] mr-5 sm:mr-10 m-10">Sign In</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
