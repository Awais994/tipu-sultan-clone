import React from "react";
import "./sectionOne.css";
import { useNavigate } from "react-router-dom";
function SectionOne({ props }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="section-one"
        style={{
          backgroundImage: `url(${props.img})`,
        }}
      >
        <div className="childSection-one">
          <h5>MAJESTIC DINING EXPERIENCE</h5>
          <h1>{props.heading}</h1>
          {props.heading1 !== undefined ? <h1>{props.heading1}</h1> : null}
          <p>{props.para}</p>
          <div className="btn-div">
            <div
              className="btn-div1"
              onClick={() => {
                navigate("/restaurant-menu");
              }}
            >
              OUR MENU
            </div>
            <div
              className="btn-div2"
              onClick={() => {
                navigate("/reservations");
              }}
            >
              RESERVE A TABLE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
