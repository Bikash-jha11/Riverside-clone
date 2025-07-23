import React from "react";
import "../styles/tools.css";
import { Link } from "react-router-dom";
import { PiRecordFill } from "react-icons/pi";
import { RiScissorsCutFill } from "react-icons/ri";
import { TbLivePhotoFilled } from "react-icons/tb";
import { GrPlan } from "react-icons/gr";
import { CiImport } from "react-icons/ci";

function Tools() {
  return (
    <div className="section">
      <div className="container">
        <div className="circle recording">
          <Link to="" className="center">
            <PiRecordFill
              size={35}
              style={{
                color: "red",
              }}
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="" className="center">
            <RiScissorsCutFill
              size={25}
              style={{
                color: "white",
              }}
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="" className="center">
            <TbLivePhotoFilled
              size={25}
              style={{
                color: "white",
              }}
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="" className="center">
            <GrPlan
              size={25}
              style={{
                color: "white",
              }}
            />
          </Link>
        </div>
        <div className="circle">
          <Link to="" className="center">
            <CiImport
              size={25}
              style={{
                color: "white",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Tools;
