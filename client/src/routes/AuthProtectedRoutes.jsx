import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const AuthProtectedRoutes = () => {
  const {isAuthenticated,isHydrating}= useSelector((store)=> store.auth);

if(isHydrating){
  return <p role="status">checking your session...</p>
}

  if(isAuthenticated){
    return <Navigate to="/home" />
  }
  return <Outlet/>
}

export default AuthProtectedRoutes
