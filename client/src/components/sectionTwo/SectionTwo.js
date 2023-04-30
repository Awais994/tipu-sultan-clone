import React from "react";
import "./sectionTwo.css";
import { useNavigate } from "react-router-dom";
function SectionTwo() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="section-two"
        style={{ backgroundColor: "#6a1b13", color: "#fff" }}
      >
        <div className="sectiontwo-child1">
          {" "}
          <img src="left-img.jpg" alt="img" style={{ width: "100%" }} />
        </div>
        <div className="sectiontwo-child2">
          <h5>DINE LIKE A SULTAN</h5>
          <h2>
            Majestic Dining
            <br />
            Experience
          </h2>
          <p>
            Tipu Sultan is the perfect restaurant for couples, families and
            friends. Whether for business socialising or just getting together,
            our beautiful restaurant is an oasis to relax and enjoy the best
            food and drink and live like a Sultan.
          </p>
          <div className="btn-div-scnd">
            <div
              className="btn-div1"
              onClick={() => {
                navigate("/reservations");
              }}
            >
              RESERVE A TABLE
            </div>
            <div
              className="btn-div2"
              onClick={() => {
                navigate("/Offers");
              }}
            >
              OFFERS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
