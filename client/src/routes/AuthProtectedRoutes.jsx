import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const AuthProtectedRoutes = () => {
  const {isAuthenticated}= useSelector((store)=> store.auth);

  if(isAuthenticated){
    return <Navigate to="/home" />
  }
  return <Outlet/>
}

export default AuthProtectedRoutes
