import React from "react";
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from "react-router-dom";
import { StreamChat } from "stream-chat";
// import Cookies from "universal-cookie";
// import Loading from '../src/Share/Loading';
// import auth from './firebase.init';

const RequireAuth = ({ children }) => {
  // const [, loading] = useAuthState(auth);
  const location = useLocation();
  const apiKey = "3pznn44zcu9w";
  //   const authToken = Cookies.get("token");
  const client = StreamChat.getInstance(apiKey);

  //   if (authToken) {
  //     client.connectUser(
  //       {
  //         id: Cookies.get("userId"),
  //         name: Cookies.get("username"),
  //         fullName: Cookies.get("fullName"),
  //         image: Cookies.get("avatarURL"),
  //         hashedPassword: Cookies.get("hashedPassword"),
  //         phoneNumber: Cookies.get("phoneNumber"),
  //       },
  //       authToken
  //     );
  //   }

  // if(loading){
  //     return <Loading />
  // }

  if (!client.user) {
    return <Navigate to="/auth-signup" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
