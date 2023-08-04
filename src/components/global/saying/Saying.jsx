import React from 'react'
import Typography from '../typography/Typography'
import { StyledSaying } from './style'

const Saying = ({fontStyle,variant}) => {
  return (
    <StyledSaying className='saying' variant={variant}>
      <span>“</span>
      <Typography as='p'variant={variant} className='saying-paragraph' fontStyle={fontStyle}>
         I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
      </Typography>
      <Typography as='p' variant={variant}  fontStyle={fontStyle}>
        Hideo Kojima
      </Typography>
      
    </StyledSaying>
  )
}

export default Saying