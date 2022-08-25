/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../src/Share/Loading';
import auth from './firebase.init';


const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    
    if(loading){
        return <Loading />
    }

    if(!user){
        return <Navigate to='/signIn' state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default RequireAuth;