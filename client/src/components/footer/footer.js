import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="footer-div">
        <div className="footer-div-child-1">
          <Row xs={1} md={2}>
            <Col lg={3} className="col-1">
              <Link to="/">
                <img src="footer-logo.jpg" alt="footer-logo" />
              </Link>
            </Col>
            <Col lg={2} className="col-2">
              <ListGroup>
                <ListGroup.Item>
                  {" "}
                  <strong>Quick Links</strong>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <Link to="/" className="footer-linker">
                    Home
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/restaurant-menu" className="footer-linker">
                    Restaurant Menu
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <Link to="/reservations" className="footer-linker">
                    Reservations
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <Link to="/Offers" className="footer-linker">
                    Offers
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <Link to="/privacy-policy" className="footer-linker">
                    Privacy Policy
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="contact-us" className="footer-linker">
                    Contact Us
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={2} className="col-3">
              <ListGroup>
                <ListGroup.Item>
                  {" "}
                  <strong>Hours</strong>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Normal Opening:</strong>
                  <br />
                  Monday – Sunday
                  <br />
                  12PM – 11PM
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Ramadan Opening:</strong> <br />
                  Monday – Friday
                  <br />
                  5PM – 11PM
                  <br />
                  Saturday – Sunday
                  <br />
                  12PM – 11PM
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={2} className="col-4">
              <ListGroup>
                <ListGroup.Item>
                  {" "}
                  <strong>Location</strong>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <strong>Tipu Sultan Nottingham</strong>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  482 Mansfield Road, <br />
                  Sherwood, Nottingham
                  <br />
                  NG5 2EL
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="tel:01156483326"
                    style={{
                      textDecoration: "none",
                      color: "#c59051",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    0115 648 3326
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <a
                    href="mailto:nottingham@tipu-sultan.com"
                    style={{
                      textDecoration: "none",
                      color: "#c59051",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    nottingham@tipu-sultan.com
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </div>
        <div className="footer-div-child-2">
          &copy; Copyright Tipu Sultan.All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
