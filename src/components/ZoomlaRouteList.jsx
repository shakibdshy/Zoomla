/* eslint-disable prettier/prettier */
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from "../../firebase/RequireAuth";
import ChatPage from "../Pages/ChatPage";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Meeting from "../Pages/MeetingPage";
import ProfileUser from "../Pages/ProfileUser";
import Schedule from "../Pages/schedule";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import ZoomlaStore from "../Pages/ZoomlaStore";
import "../globals.css"


export function ZoomlaRouteList() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/meeting-page" element={<RequireAuth><Meeting /></RequireAuth>} />
                <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
                <Route path="/schedule" element={<RequireAuth><Schedule /></RequireAuth>} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/userProfile" element={<RequireAuth><ProfileUser /></RequireAuth>} />
                <Route path="/stories" element={<RequireAuth><ZoomlaStore /></RequireAuth>} />
            </Routes>
            <ToastContainer />
        </div>
    )
}