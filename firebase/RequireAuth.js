/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { StreamChat } from 'stream-chat';
// import Loading from '../src/Share/Loading';
// import auth from './firebase.init';


const RequireAuth = ({children}) => {
    // const [, loading] = useAuthState(auth);
    const location = useLocation();
    const apiKey = '3pznn44zcu9w';
    const client = StreamChat.getInstance(apiKey);
    
    // if(loading){
    //     return <Loading />
    // }

    if (!client.user){
        return <Navigate to='/auth-signup' state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default RequireAuth;