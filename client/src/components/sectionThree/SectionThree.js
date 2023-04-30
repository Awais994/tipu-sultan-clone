import React from "react";
import "./sectionThree.css";
import { useNavigate } from "react-router-dom";
function SectionThree() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="section-three"
        style={{ backgroundColor: "#000000", color: "#fff" }}
      >
        <div className="sectionthree-child2">
          <h5>UNIQUE DINING DESTINATION</h5>
          <h2>
            Authentic Pakistani
            <br />& Indian Cuisine
          </h2>
          <p>
            Both Indian and Pakistani cuisine holds a rich heritage in the
            Subcontinent. Offering a varied selection of authentic Indian &
            Pakistani dishes. At Tipu Sultan Nottingham you’ll enjoy traditional
            tastes with a modern twist as we cook our food using with the
            finest, freshest ingredients.
          </p>
          <div className="btn-div-third">
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
                navigate("/our-story");
              }}
            >
              OUR STORY
            </div>
          </div>
        </div>
        <div className="sectionthree-child1">
          {" "}
          <img
            src="Tipu-Sultan-Nottingham-Paneer.png"
            alt="img"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
