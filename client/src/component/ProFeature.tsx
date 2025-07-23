import React from 'react'
import '../styles/profeatures.css'
import CustomCarousel from './CustomCarousel'
import image1 from '../assets/img1.png'
import image2 from '../assets/img2.png'
import image3 from '../assets/img3.png'

function ProFeature() {
  return (
    <>
    <div className="main_section">
        <div className="tools_section">
            <h2>AI tools</h2>
           <div className="carousel">
               <CustomCarousel image = {image1} text = ""/> 
               <CustomCarousel image = {image2} text = ""/> 
               <CustomCarousel image = {image3} text = ""/> 
           </div>

        </div>
    </div>
    </>
  )
}

export default ProFeature