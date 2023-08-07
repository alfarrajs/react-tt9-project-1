import React, { useContext } from 'react';
import Img from '../img';
import './style.css';
import { ThemeContext } from "../../../App";

export default function Index() {
  const themeColor = useContext(ThemeContext);
  return (
    <div>
      <nav className="verticalNavbar navWithBackground">
        <Img className="Game-two" src="../../../assets/images/Game-two (游戏).png" />

        <div className="icons">
          <Img src="../../../assets/images/Like (喜欢).png" />
          <Img src="../../../assets/images/Setting-two (设置).png" />
          <Img src="../../../assets/images/Puzzle (拼图).png" />
        </div>

        <div className={`moon-light switch-${themeColor.theme}`}>
          <svg className={`.icon-fill-${themeColor.theme}`} onClick={()=>themeColor.setTheme("dark")} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path
            className={`.icon-fill-${themeColor.theme}`}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.2459 4.56786C9.07118 5.63659 4.37498 11.0199 4.37498 17.5C4.37498 24.7488 10.2512 30.625 17.5 30.625C23.9801 30.625 29.3634 25.9288 30.4322 19.7542C28.4865 21.7186 25.7876 22.9356 22.803 22.9356C16.8722 22.9356 12.0644 18.1278 12.0644 12.197C12.0644 9.21246 13.2815 6.51349 15.2459 4.56786ZM1.45831 17.5C1.45831 8.64047 8.64041 1.45837 17.5 1.45837C18.6117 1.45837 19.6986 1.57169 20.7491 1.78789C21.413 1.92455 21.8953 2.50069 21.9129 3.17834C21.9306 3.85598 21.4789 4.45643 20.823 4.62745C17.4609 5.504 14.9811 8.56273 14.9811 12.197C14.9811 16.517 18.483 20.0189 22.803 20.0189C26.4373 20.0189 29.4961 17.5391 30.3725 14.1771C30.5435 13.5211 31.144 13.0695 31.8216 13.0871C32.4993 13.1047 33.0754 13.587 33.2121 14.2509C33.4283 15.3014 33.5416 16.3883 33.5416 17.5C33.5416 26.3596 26.3596 33.5417 17.5 33.5417C8.64041 33.5417 1.45831 26.3596 1.45831 17.5Z"
              fill={`${themeColor.theme === "dark" ? "white" : "#5B5A5A"}`}
            />
          </svg>
          <Img onClick={()=>themeColor.setTheme("light")} className="imger" src="../../../assets/images/Sun-one (太阳1).png" />
        </div>
      </nav>
    </div>
  );
}