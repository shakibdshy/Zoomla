import { Checkbox } from "@material-tailwind/react";
import React from "react";
import { BsChevronLeft, BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import Loading from "../Share/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UseUserContext } from "../context/UpcomingContext";

function SignIn() {
  const [currentUser, , setUser] = UseUserContext();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;
  if (error || gError) {
    signInError = (
      <p className="text-red-500 mb-2 text-center">{error?.message}</p>
    );
  }

  if (gUser && currentUser?.email !== gUser?.user?.email) {
    const email = gUser.user.email;
    const name = gUser.user.displayName;
    const img = gUser.user.photoURL;
    fetch(`https://arcane-wave-11590.herokuapp.com/user`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, name, img }),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setUser(data);
        }
      });
  }

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (loading || gLoading) {
    return <Loading />;
  }

  const handaleSubmite = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password)
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex justify-center w-full h-screen items-end sm:items-center">
      <div className="p-5 sm:p-12 pb-0 section w-full sm:max-w-2xl bg-[#232634] h-auto mx-auto shadow-lg rounded-t-2xl sm:rounded-2xl">
        <div className="title">
          <h1 className="text-4xl text-[#83bbff] font-bold text-center pt-5 sm:pt-14 pb-4 sm:pb-8 flex justify-center">
            Zoomla
          </h1>
        </div>
        <form
          onSubmit={handaleSubmite}
          className="grid justify-items-center gap-y-4"
        >
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            required
            className="search-input shadow-md py-4 pl-8"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            required
            className="search-input shadow-md py-4 pl-8"
          />
          <input
            type="submit"
            value="Sign In"
            className="text-white cursor-pointer font-bold py-2 bg-blue-500 rounded-lg w-1/2"
          />
        </form>
        {signInError}
        <div className="checkbox flex justify-center items-center font-normal mt-5">
          <Checkbox defaultChecked />
          <h2 className="text-white">Keep me signed in</h2>
        </div>
        <div className="flex justify-center items-center gap-3">
          <hr className="w-full h-[1px] bg-gray-300 border-none" />
          <h2 className="grow-0 shrink-0 basis-auto m-5 text-white">
            or Sign In with
          </h2>
          <hr className="w-full h-[1px] bg-gray-300 border-none" />
        </div>
        <div className="grid justify-items-center mt-8">
          <ul className="flex gap-8">
            <li
              onClick={() => signInWithGoogle()}
              className="flex cursor-pointer flex-col items-center justify-center text-white"
            >
              <FcGoogle className="text-xl" />
              Google
            </li>
            <li className="flex flex-col items-center justify-center text-white">
              <BsFacebook className="text-xl" />
              Facebook
            </li>
            <li className="flex flex-col items-center justify-center text-white">
              <BsGithub className="text-xl" />
              GitHub
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <Link to="/">
            <span className="flex justify-center items-center ml-5 sm:ml-10 m-10 gap-x-2 text-white">
              <BsChevronLeft /> Back
            </span>
          </Link>
          <Link to="/signUp">
            <span className="text-[#83bbff] mr-5 sm:mr-10 m-10">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
