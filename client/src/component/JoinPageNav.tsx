import React from 'react'
import '../styles/joinpagenav.css'
import logo from '../assets/logo.png'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
import { HiQuestionMarkCircle } from "react-icons/hi2";

function JoinPageNav() {
  return (
    <div className='main'>
      <div className='left_section'>
        <div>
        <Link to = "/dashboard"><MdKeyboardArrowLeft  className = "left_arrow" size={32} style = {{
            color:"white",
        
        }}/></Link>
        </div>
         <h3>RIVERSIDE</h3>
          <h4> bikash jha studio</h4>
      </div>
      <div className="right_section">
          <HiQuestionMarkCircle size={32} className='question' style = {{
            color:"white"
        }}/>
      </div>
    </div>
  )
}

export default JoinPageNav