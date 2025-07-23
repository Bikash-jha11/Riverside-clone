import React from 'react'
import JoinPageNav from './JoinPageNav'
import '../styles/joinpage.css'
import LeftConfig from './LeftConfig'
import RightConfig from '../component/RightConfig'

function Join() {
  return (
    <>
    <div className='top_section'>
      <JoinPageNav/>
    </div>
    <div className="config">
       <div className="left_config">
                <LeftConfig/>
       </div>
       <div className="right_config">
         <RightConfig/>
       </div>
    </div>
    </>
  )
}

export default Join