import React , {useContext} from 'react'
import Img from "../img";
import "./style.css";
import { ThemeContext } from "../../hooks/useTheme";

export default function Index() {
   const themeColor = useContext(ThemeContext);

  return (
   
     <div className="one">
         <div className="innerLogo">
            <div className="content">
            <h3 className={`text-${themeColor.theme}`}>Welcome Back</h3>
                 <p className={`text-${themeColor.theme}`} >alfarra.js</p>
            </div>
            <Img className={"avatar"} src={"../../../assets/images/Rectangle 1 (1).png"}/>
         </div>
     </div>
  )
}
