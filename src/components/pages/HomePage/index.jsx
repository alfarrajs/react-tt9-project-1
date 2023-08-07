import React, { useContext } from 'react';
import Vnav from "../../global/verticalNav";
import Hnav from "../../global/horizentalNav";
import MainSection from "../../global/containerFluid";
import "./style.css";
import { ThemeContext } from "../../../App";

export default function Index() {
  const themeContext = useContext(ThemeContext);
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