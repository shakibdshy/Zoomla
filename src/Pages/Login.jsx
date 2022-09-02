/* eslint-disable prettier/prettier */
import { Checkbox } from "@material-tailwind/react";
import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import { StreamChat } from "stream-chat";
import { Button, Input, useMantineColorScheme } from "@mantine/core";
import { IconAt } from "@tabler/icons";

const cookies = new Cookies();

const initialState = {
  fullName: "",
  username: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  avatarURL: "",
};

function Signin() {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const apiKey = "3pznn44zcu9w";
  const client = StreamChat.getInstance(apiKey);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { username, password, phoneNumber, avatarURL } = form;

    const URL = "https://zoomla-backend.herokuapp.com/auth";

    const { data } = await axios.post(`${URL}/stream-login`, {
      username,
      password,
      fullName: form.fullName,
      phoneNumber,
      avatarURL,
    });
    const { token, userId, hashedPassword, fullName } = data;
    if (data) {
      console.log(data);
      const userData = {
        name: fullName,
        email: username,
        password: hashedPassword,
        img: avatarURL,
      };
      const url = "https://zoomla-backend.herokuapp.com/api/auth/signin";

      await axios.post(url, userData);
    }
    console.log(client.user);

    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);
    cookies.set("phoneNumber", phoneNumber);
    cookies.set("avatarURL", avatarURL);
    cookies.set("hashedPassword", hashedPassword);

    window.location.reload();

    if (client.user) {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className={`${dark ? "!bg-[#1d4bd6aa]" : "!bg-[#05091582]"} flex justify-center w-full h-screen items-end sm:items-center`}>
      <div className={`${dark ? "!bg-[#1c1f2e] text-white" : "!bg-[#fff] text-[#000]"} p-5 sm:p-12 pb-0 section w-full sm:max-w-2xl bg-[#232634] h-auto mx-auto shadow-lg rounded-t-2xl sm:rounded-2xl`}>
        <div className="title">
          <h1 className="sm:text-4xl text-3xl font-bold text-center pt-5 sm:pt-14 pb-4 sm:pb-8 flex justify-center">
            Zoomla - Sign In
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid justify-items-center gap-y-4"
        >
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
          <div className="w-full flex justify-center">
            <Button
              className="w-1/2 mx-auto bg-gradient-to-r from-[#2091d9] to-[#13b38f]"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              size="lg"
              type="submit"
            >
              Sign In
            </Button>
          </div>
        </form>
        {/* <p className="text-red-500 text-center mt-2">
          {error?.message || updateeError?.message}
        </p> */}
        <div className="checkbox flex justify-center items-center font-normal mt-5">
          <Checkbox defaultChecked />
          <h2 className="">Keep me signed Up</h2>
        </div>
        <div className="flex justify-between items-center">
          <Link to="/">
            <span className="flex justify-center items-center ml-5 sm:ml-10 m-10 gap-x-2 text-[#2091d9]">
              <BsChevronLeft /> Back
            </span>
          </Link>
          <Link to="/signup">
            <span className="text-[#13b38f] mr-5 sm:mr-10 m-10">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
