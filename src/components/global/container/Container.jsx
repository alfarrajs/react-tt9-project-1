import React from 'react'
import { StyledContainer } from './style'

const Container = ({variant,children}) => {
  return (
    <StyledContainer className='container' variant={variant}>
      {children}
    </StyledContainer>
  )
}

export default Container