import React from "react";
import "../styles/leftconfig.css";

function LeftConfig() {
  return (
    <div className="center_section">
      <div className="small">
        <h5>You're about to join bikash jha's Studio</h5>
      </div>
      <div className="big">
        <h2>Let’s check your cam and mic</h2>
      </div>
      <div className="input">
        <div className="inputBox">
          <input type="text" name="hostname" placeholder="Host name" />
        </div>
      </div>
      <div className="btn_group">
        <div className="btn">
          <button>I am not using headphones</button>
        </div>
        <div className="btn">
          <button >I am not using headphones</button>
        </div>
      </div>

      <div className="joinbtn">
        <div className="btn">
        <button><span id = "btn">Join studio</span></button>
        </div>
       
      </div>
    </div>
  );
}

export default LeftConfig;
