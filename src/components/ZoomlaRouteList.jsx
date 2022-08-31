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
import Schedule from "../Pages/Schedule";
import ZoomlaStore from "../Pages/ZoomlaStore";
import { StreamAuth } from "./ChatContainer";


export function ZoomlaRouteList() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth-signup" element={<StreamAuth />} />
                <Route path="/meeting-page" element={<Meeting />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/userProfile" element={<ProfileUser />} />
                <Route path="/stories" element={<ZoomlaStore />} />
            </Routes>
            <ToastContainer />
        </div>
    )
}