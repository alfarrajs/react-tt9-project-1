import React from 'react'
import { StyledBtn } from './style'

const Button = ({type,variant,handleClick,children}) => {
  return (
    <StyledBtn type={type} variant={variant} onClick={handleClick}>{children}</StyledBtn>
  )
}

export default Button