import React from 'react'
import LeftSlider from './LeftSlider'
import MainBox from './MainBox'
import '../styles/home.css'

function Home() {
  return (
    <>
    <div className='container'>
        <div className='leftslider'>
    <LeftSlider/>
    </div>
    <div className='main'>
    <MainBox/>
    </div>
    </div>
    </>
  )
}

export default Home