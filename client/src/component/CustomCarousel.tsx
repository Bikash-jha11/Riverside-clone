import React from 'react'
import '../styles/carousel.css'

interface CustomProps{
    image: any,
    text: string
}

function CustomCarousel({image,text}:CustomProps) {
  return (
    <>
    <div className="container">
  <img src={image}/>
  <div className="bottom-left">{text}</div>
</div>
    </>
  )
}

export default CustomCarousel