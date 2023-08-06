import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const GuestGuard = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isGuestRoute = location.pathname === '/login' || location.pathname === '/signup';

  if (!isGuestRoute) {
    navigate('/login');
  }

  return <>{children}</>;
};

export default GuestGuard;
