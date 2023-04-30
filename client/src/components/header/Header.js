import React from "react";
import "./header.css";
import { FaInstagram, FaFacebookF, FaPhone } from "react-icons/fa";
function Header() {
  return (
    <div>
      <div className="head-nav">
        <div className="childHead-nav">
          <div className="childhead-nav1">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/tipusultannottingham"
              className="childHeadNav1-1"
            >
              <FaFacebookF size={19} style={{ color: "#fff" }} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/tipusultannottingham/"
              className="childHeadNav1-2"
            >
              <FaInstagram size={19} style={{ color: "#fff" }} />
            </a>
          </div>
          <div className="childhead-nav2">
            {" "}
            <a href="tel:01156483326" className="childHeadNav2-1">
              Nottingham
              <FaPhone
                size={16}
                style={{
                  rotate: "-265deg",
                  marginLeft: "4px",
                  marginRight: "4px",
                  // position: "relative",
                  // top: "2px",
                  color: "#fff",
                }}
              />
              0115 648 3326
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
