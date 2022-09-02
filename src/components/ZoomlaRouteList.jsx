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
import { ZoomlaAuth } from "../Pages/Registerui";
import Schedule from "../Pages/Schedule";
import ZoomlaStore from "../Pages/ZoomlaStore";


export function ZoomlaRouteList() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/meeting-page" element={<RequireAuth><Meeting /></RequireAuth>} />
                <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
                <Route path="/schedule" element={<RequireAuth><Schedule /></RequireAuth>} />
                <Route path="/chat" element={<RequireAuth><ChatPage /></RequireAuth>} />
                <Route path="/userProfile" element={<RequireAuth><ProfileUser /></RequireAuth>} />
                <Route path="/stories" element={<RequireAuth><ZoomlaStore /></RequireAuth>} />
                <Route path="/regui" element={<ZoomlaAuth />} />
            </Routes>
            <ToastContainer />
        </div>
    )
}