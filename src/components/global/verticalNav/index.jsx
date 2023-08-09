import React, { useContext, useEffect, useRef } from 'react';
import Img from '../img';
import './style.css';
import { ThemeContext } from "../../hooks/useTheme";
import { useAuthContext } from "../../contexts/AuthContext";
import { ROLES } from "../../constants/index";
import { Link } from 'react-router-dom';

export default function Index() {
  const themeColor = useContext(ThemeContext);
  const navbarAfterElementRef = useRef(null);
  const { role } = useAuthContext(); // Assuming you have access to the user's role
  const handleClick = () => {
    localStorage.clear();
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      themeColor.setTheme(savedTheme);
    }
  }, [themeColor]);

  useEffect(() => {
    const navbarAfterElement = navbarAfterElementRef.current;
    if (navbarAfterElement) {
      if (themeColor.theme === 'dark') {
        navbarAfterElement.style.background = '#222';
        navbarAfterElement.style.boxShadow = '2px 4px 4px 0px rgba(255, 255, 255, 0.57) inset';
      } 
      else if (themeColor.theme === 'light') {
        navbarAfterElement.style.background = '#FFF';
        navbarAfterElement.style.boxShadow = '2px 4px 4px 0px rgba(0, 0, 0, 0.25) inset';
      }
      
    }
  }, [themeColor.theme]);

  const handleThemeChange = (newTheme) => {
    themeColor.setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div>
      <nav className="verticalNavbar navWithBackground">
        <Img className="Game-two" src="../../../assets/images/Game-two (游戏).png" />

        <div className="icons">
          {localStorage.getItem("role") === ROLES.ADMIN && (
            <Link to="/admin"><Img src="../../../assets/images/Setting-two (设置).png" /></Link>
          )}
          {localStorage.getItem("role")  === ROLES.USER && (
            <>
    <Link to="/login" onClick={handleClick}>
<svg style={{cursor:"pointer"}}
      id="changeColor"
      fill="#DC7633"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="37"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.9999"
      height="37"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <path
          id="pathAttribute"
          d="M 8.238281 8.238281 L 357.46875 8.238281 L 357.46875 357.46875 L 8.238281 357.46875 Z M 8.238281 8.238281 "
          fill="#03989e"
        ></path>
      </defs>
      <g>
        <path
          id="pathAttribute"
          d="M 182.835938 8.238281 C 86.40625 8.238281 8.238281 86.40625 8.238281 182.835938 C 8.238281 279.269531 86.40625 357.4375 182.835938 357.4375 L 357.4375 357.4375 L 357.4375 182.835938 C 357.46875 86.40625 279.269531 8.238281 182.835938 8.238281 Z M 182.835938 8.238281 "
          fillOpacity="1"
          fillRule="nonzero"
          fill="#03989e"
        ></path>
      </g>
      <g id="inner-icon" transform="translate(85, 75)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="219"
          height="219"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-log-out"
          id="IconChangeColor"
        >
          <path
            d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
            id="mainIconPathAttribute"
            fill="#000000"
          ></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </g>
    </svg>

       </Link>
            </>
          )}
        </div>

        <div className={`moon-light switch-${themeColor.theme}`}>
        <svg className={`.icon-fill-${themeColor.theme}`} onClick={()=>handleThemeChange("dark")} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
        <path
        className={`.icon-fill-${themeColor.theme}`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.2459 4.56786C9.07118 5.63659 4.37498 11.0199 4.37498 17.5C4.37498 24.7488 10.2512 30.625 17.5 30.625C23.9801 30.625 29.3634 25.9288 30.4322 19.7542C28.4865 21.7186 25.7876 22.9356 22.803 22.9356C16.8722 22.9356 12.0644 18.1278 12.0644 12.197C12.0644 9.21246 13.2815 6.51349 15.2459 4.56786ZM1.45831 17.5C1.45831 8.64047 8.64041 1.45837 17.5 1.45837C18.6117 1.45837 19.6986 1.57169 20.7491 1.78789C21.413 1.92455 21.8953 2.50069 21.9129 3.17834C21.9306 3.85598 21.4789 4.45643 20.823 4.62745C17.4609 5.504 14.9811 8.56273 14.9811 12.197C14.9811 16.517 18.483 20.0189 22.803 20.0189C26.4373 20.0189 29.4961 17.5391 30.3725 14.1771C30.5435 13.5211 31.144 13.0695 31.8216 13.0871C32.4993 13.1047 33.0754 13.587 33.2121 14.2509C33.4283 15.3014 33.5416 16.3883 33.5416 17.5C33.5416 26.3596 26.3596 33.5417 17.5 33.5417C8.64041 33.5417 1.45831 26.3596 1.45831 17.5Z"
          fill={`${themeColor.theme === "dark" ? "white" : "#5B5A5A"}`}
        />
      </svg>
          <Img
            onClick={() => handleThemeChange("light")}
            className="imger"
            src="../../../assets/images/Sun-one (太阳1).png"
          />
        </div>

        {/* Real element */}
        <div
          ref={navbarAfterElementRef}
          className="verticalNavbar__afterElement"
        ></div>
      </nav>
    </div>
  );
}