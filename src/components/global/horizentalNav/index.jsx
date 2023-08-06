import React from 'react'
import Img from "../img";
import "./style.css";
export default function index() {
  return (
     <div className="one">
         <div className="innerLogo">
            <div className="content">
            <h3>Welcome Back</h3>
                 <p>alfarra.js</p>
            </div>
            <Img  className={"avatar"} src={"../../../assets/images/Rectangle 1 (1).png"}/>
         </div>
     </div>
  )
}
