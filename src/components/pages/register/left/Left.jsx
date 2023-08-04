import React from 'react'
import Background from './Background'
import Brand from './Brand'
import Saying from '../../../global/saying/Saying';
import Dots from './Dots';
import Vector from './Vector';
const Left = () => {
  return (
    <div className='left-side' style={{width : '44.5%'}}>
      <Background>
        <Brand />
        <Dots></Dots>
        <Saying variant='light'></Saying>
        <Vector></Vector>
      </Background>
    </div>
  )
}

export default Left