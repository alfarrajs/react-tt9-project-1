import React from 'react'
import "./style.js";
 const Index = ({img1,img2,title,customClassName,img1Class,img2Class,paraClass}) => {
  return (
    <React.Fragment>
    <div className={`cardBig ${customClassName}`}>
    <img className={`img1Class`} src={img1}  alt="" />
    <img className={`img2Class`} src={img2}  alt="" />
    <p className={`paraClass`}>{title}</p>
    </div>
    </React.Fragment>
  )
}

export default Index;
