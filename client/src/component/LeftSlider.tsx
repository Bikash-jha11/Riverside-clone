import React from "react";
import "../styles/leftslider.css";
import { Link } from "react-router-dom";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { CgHome } from "react-icons/cg";
import { CiFolderOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";

function LeftSlider() {
            
  return (
    <>
    <div className="left">
      <div className="upper">
        <Link to = "/"><BsLayoutTextSidebar className="icon" size={22} /></Link>
        <Link to = "/"><CgHome className="icon" size={22} /></Link>
        <Link to = "/"><CiFolderOn className="icon" size={24} /></Link>
        <Link to = "/"><CiCalendar className="icon" size={24} /></Link>
      </div>
      <div className="lower">
      <Link to = "/"><BsFillPersonPlusFill className="icon" size={22} /></Link>
      <Link to = "/"><BiVideo className="icon" size={22} /></Link>
      <Link to = "/"><GrAnnounce className="icon" size={22} /></Link>
      <Link to = "/"><IoSettings className="icon" size={22} /></Link>
      </div>
    </div>
    </>
  );
}

export default LeftSlider;
