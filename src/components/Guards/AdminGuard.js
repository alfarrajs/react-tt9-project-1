import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminGuard = ({ children  }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAdminRoute = location.pathname === '/home' || location.pathname === '/profile' || location.pathname === '/admin';

  if (!isAdminRoute) {
    navigate('/home');
  }
     
  return <>{children}</>;
};

export default AdminGuard;
