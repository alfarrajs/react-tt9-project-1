import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UserGuard = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isUserRoute = location.pathname === '/home' || location.pathname === '/profile';

  if (!isUserRoute) {
    navigate('/home');
  }

  return <>{children}</>;
};

export default UserGuard;
