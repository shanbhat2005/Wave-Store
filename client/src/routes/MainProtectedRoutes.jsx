import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router';

const MainProtectedRoutes = () => {
  const {isAuthenticated}= useSelector((store)=> store.auth);

   if(!isAuthenticated){
    return <Navigate to="/" />
  }
  return <Outlet/>
}

export default MainProtectedRoutes
