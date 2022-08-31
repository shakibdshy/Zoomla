/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StreamChat } from "stream-chat";
import { Button, Input, Title, useMantineColorScheme } from "@mantine/core";
import { IconAt } from "@tabler/icons";
import { BsChevronLeft } from "react-icons/bs";

const cookies = new Cookies();

const initialState = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};

const StreamAuth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const apiKey = '3pznn44zcu9w';
  const client = StreamChat.getInstance(apiKey);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { username, email, password, phoneNumber, avatarURL } = form;

    const URL = "https://zoomla-backend.herokuapp.com/auth";

    const { data } = await axios.post(
      `${URL}/${isSignup ? "stream-signup" : "stream-login"}`,
      {
        username,
        email,
        password,
        fullName: form.fullName,
        phoneNumber,
        avatarURL,
      }
    );
    const { token, userId, hashedPassword, fullName } = data;
    if (isSignup && data) {
      const userData = {
        name: fullName,
        email: username,
        password: hashedPassword,
        avatar: avatarURL,
      }
      const url = "https://zoomla-backend.herokuapp.com/api/auth";

      await axios.post(`${url}/${isSignup ? "signup" : "signin"}`, userData)
      //console.log(data);

    }

    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);

    if (isSignup) {
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatarURL", avatarURL);
      cookies.set("hashedPassword", hashedPassword);
    }

    window.location.reload();

    if (client.user) {
      navigate(from, { replace: true });
    }
  };

  const switchMode = () => {
    setIsSignup(prevIsSignup => !prevIsSignup);
  };

  return (
    <div className={`flex justify-center w-full h-screen items-end sm:items-center ${dark ? "bg-[#212534]" : ""}`}>
      <div className="p-5 sm:p-12 pb-0 section w-full sm:max-w-2xl bg-[#232634] h-auto mx-auto shadow-lg rounded-t-2xl sm:rounded-2xl">
        <Title order={3} size="h1" align="center" className="pb-8">{isSignup ? "Sign Up" : "Sign In"}</Title>
          <form className="grid justify-items-center gap-y-4" onSubmit={handleSubmit}>
            {isSignup && (
              <div className="w-full">
                <Input
                  name="fullName"
                  type="text"
                  icon={<IconAt />}
                  variant="filled"
                  placeholder="Enter Your Name"
                  size="lg"
                  onChange={handleChange}
                  required
                  classNames="w-full"
                />
              </div>
            )}
            <div className="w-full">
              <Input
                name="username"
                type="text"
                icon={<IconAt />}
                variant="filled"
                placeholder="Enter Username"
                size="lg"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="w-full">
                <Input
                  name="phoneNumber"
                  type="text"
                  icon={<IconAt />}
                  variant="filled"
                  placeholder="Phone Number"
                  size="lg"
                  onChange={handleChange}
                />
              </div>
            )}
            {isSignup && (
              <div className="w-full">
                <Input
                  name="avatarURL"
                  type="text"
                  icon={<IconAt />}
                  variant="filled"
                  placeholder="Avatar URL"
                  size="lg"
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="w-full">
              <Input
                name="password"
                type="password"
                icon={<IconAt />}
                variant="filled"
                placeholder="Password"
                size="lg"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="w-full">
                <Input
                  name="confirmPassword"
                  type="password"
                  icon={<IconAt />}
                  variant="filled"
                  placeholder="Confirm Password"
                  size="lg"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="w-full">
              <Button
                className="w-full"
                size="lg"
              type="submit"
              style={{ backgroundColor: "transparent", backgroundImage: "linear-gradient(45deg, rgb(76, 110, 245) 0%, rgb(21, 170, 191) 100%)" }}
              >
                {isSignup ? "Sign Up" : "Sign In"}
              </Button>
            </div>
          </form>
          <div className="flex justify-between items-center">
            <Link to="/">
              <span className="flex justify-center items-center m-10 ml-0 gap-x-2 text-white">
                <BsChevronLeft /> Back
              </span>
            </Link>
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span className="text-[#83bbff] m-10 mr-0 cursor-pointer" onClick={switchMode}>
                {isSignup ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </div>
      </div>
    </div>
  );
};

export default StreamAuth;
