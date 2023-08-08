import React, { useContext } from 'react';
import Img from '../img';
import { Link } from 'react-router-dom';
import './style.css';
import { ThemeContext } from '../../hooks/useTheme';

export default function Index() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="one">
      <div className="innerLogo">
        <div className="content">
          <h3 className={`text-${themeContext.theme}`}>Welcome Back</h3>
          <p className={`text-${themeContext.theme}`}>{localStorage.getItem('name')}</p>
        </div>
        <Link to="/profile">
          <Img className="avatar" src="../../../assets/images/Rectangle 1 (1).png" />
        </Link>
      </div>
    </div>
  );
}