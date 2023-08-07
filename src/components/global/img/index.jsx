import React from 'react'

 const index = ({src,className,onClick}) => {
  return (
    <img onClick={onClick} src={src} className={className} alt="" />
  )
}
export default index;
