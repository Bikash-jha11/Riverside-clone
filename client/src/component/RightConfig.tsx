import React from "react";
import "../styles/rightconfig.css";

function RightConfig() {
  return (
    <>
      <div className="setting_config">
        <div className="inner">
          <div className="preview"></div>
          <div className="dropdown">
            <span>Cam blocked</span>
            <div className="dropdown-content">
              <p>Hello World!</p>
            </div>
          </div>
        
          <div className="dropdown">
            <span id = "name">external microphone</span>
            <div className="dropdown-content">
              <p>Hello World!</p>
            </div>
           </div>
           
        </div>
      </div>
    </>
  );
}

export default RightConfig;
