import React from "react";
import {StyledH1, StyledH2, StyledLabel, StyledParagraph} from './style.js'
const Typography = ({ as ,variant,fontStyle='normal',children}) => {
  // fontStyle props determines a text style 
  // variant determines sizes or aligns
  // as props determines the tag type 
  switch(as.toLowerCase()){
    case 'h1':
      return <StyledH1 className={`typo`} variant={variant} fontStyle={fontStyle}> {children} </StyledH1>
    case 'h2':
      return <StyledH2 className={`typo`} variant={variant} fontStyle={fontStyle}> {children} </StyledH2>
    case 'label':
      return <StyledLabel className={`typo`} variant={variant} fontStyle={fontStyle}> {children} </StyledLabel>
    case 'p':
      return <StyledParagraph className={`typo`} variant={variant} fontStyle={fontStyle}> {children} </StyledParagraph>
    default : 
    return <div className={`typo ${variant}`} fontStyle={fontStyle}>{children}</div>
  }
};



export default Typography;
