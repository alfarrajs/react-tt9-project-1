import React from 'react'
import Container from "../../../global/container/Container";
import Brand from './Brand';
import Saying from '../../../global/saying/Saying';
import { JoyImage } from './style';

const Left = () => {
  return (
    <div className='left-side' style={{position : 'relative',flex:'1'}}>
      <Container variant='lg'>
        <Brand></Brand>
        <Saying fontStyle='italic' variant='gray'></Saying>
        <JoyImage src='/assets/joytick.png' alt=''/>
      </Container>
    </div>
  )
}

export default Left