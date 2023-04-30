import React from "react";
import "./sectionFive.css";
import { useNavigate } from "react-router-dom";
function SectionFive() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="section-five"
        style={{ backgroundColor: "#2e492d", color: "#fff" }}
      >
        <div className="sectionfive-child1">
          {" "}
          <img src="img-bottom-lelft.jpg" alt="img" style={{ width: "100%" }} />
        </div>
        <div className="sectionfive-child2">
          <h5>STATE OF ADVENTURE</h5>
          <h2>
            Aboslutely
            <br />
            Exquisite
          </h2>
          <p>
            Tipu Sultan is the perfect restaurant for couples, families and
            friends. Whether for business socialising or just getting together,
            our beautiful restaurant is an oasis to relax and enjoy the best
            food and drink and live like a Sultan.
          </p>
          <div className="btn-div-five">
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
                navigate("/contact-us");
              }}
            >
              CONTACT US
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
