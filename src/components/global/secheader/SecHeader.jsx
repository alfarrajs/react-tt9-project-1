import React from 'react'
import Typography from '../typography/Typography'
import { StyledSecHeader } from './style'
const SecHeader = ({variant,size,heading1,heading2 ,style}) => {
  // variant center , left 
  // size lg ,md (font-size) 
  return (
    <StyledSecHeader className='sec-header' size={size} style={style}>
      <Typography as='h1' variant={variant} >{heading1}</Typography>
      <Typography as='h2' variant={variant}>{heading2}</Typography>
    </StyledSecHeader>
  )
}

export default SecHeader