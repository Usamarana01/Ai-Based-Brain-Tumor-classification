import React from 'react';
import { Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (currentUser) {
    return element ? <>{element}</> : <Outlet />;
  }

  // Redirect to login page and pass the current location
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
