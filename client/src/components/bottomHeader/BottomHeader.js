import React from "react";
import "./bottomHeader.css";
function BottomHeader() {
  return (
    <div>
      <div className="bottomHeader">
        <div className="childBottomHeader">
          <strong>NOTTINGHAM TIPU SULTAN IS NOW OPEN! </strong>
          Call
          <a
            href="tel:01156483326"
            style={{
              color: "inherit",
              textDecoration: "none",
              marginLeft: "4px",
              marginRight: "4px",
            }}
          >
            01156483326
          </a>
          (Nottingham) to book your table now!
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
