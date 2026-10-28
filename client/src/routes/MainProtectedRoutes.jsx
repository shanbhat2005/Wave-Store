import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router';

const MainProtectedRoutes = () => {
  const { isAuthenticated, isHydrating } = useSelector((state) => state.auth);

  if (isHydrating) {
    return <p role="status">Checking your session...</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default MainProtectedRoutes
