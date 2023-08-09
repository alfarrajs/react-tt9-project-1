import React, { useContext, useEffect } from 'react';
import Vnav from "../../global/verticalNav";
import Hnav from "../../global/horizentalNav";
import MainSection from "../../global/containerFluid";
import "./style.css";
import { ROLES } from "../../constants/index";
import { ThemeContext } from "../../hooks/useTheme";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  const location = useLocation();
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (!role || role === ROLES.GUEST) {
      navigate("/login");
      setTimeout(()=>{
        alert("HeyGuest sign in before")

      },1000)
    }
  }, [navigate]);

  useEffect(() => {
    const isGuest = localStorage.getItem("role") === ROLES.GUEST;
    const isHomePath = location.pathname === "/home";

    if (isGuest && isHomePath) {
      navigate("/login");
    }
  }, [location, navigate]);

  return (
    <React.Fragment>
      <div className={`${themeContext.theme}`}>
        <Hnav />
        <Vnav />
        <MainSection />
      </div>
    </React.Fragment>
  );
}