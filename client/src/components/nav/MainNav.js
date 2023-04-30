import React from "react";
import "./nav.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

function MainNav() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const showDropdown2 = (e) => {
    setShow2(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
    setShow2(false);
  };
  return (
    <div>
      <Navbar expand="lg" id="nav1">
        <Container id="container" style={{ margin: "auto" }}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="linker nav-link-router">
                Home
              </Link>
              <NavDropdown
                title="Menu"
                id="basic-nav-dropdown"
                className="linker"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item as="li" className="linker-child">
                  <Link to="/restaurant-menu" className="nav-link-router">
                    Main Menu
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/reservations" className="linker nav-link-router">
                Reservations
              </Link>
              <Navbar.Brand style={{ marginLeft: "30px", marginRight: "30px" }}>
                <Link to="/">
                  <img src="/logo.png" alt="Logo" style={{ width: "253px" }} />
                </Link>
              </Navbar.Brand>

              <Link to="/Offers" className="linker nav-link-router">
                Offers
              </Link>

              <NavDropdown
                title="Our Story"
                id="basic-nav-dropdown"
                className="linker"
                show={show2}
                onMouseEnter={showDropdown2}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item as="li" className="linker-child">
                  <Link to="/our-story" className="nav-link-router">
                    Story
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li" className="linker-child">
                  <Link to="/vacancies" className="nav-link-router">
                    Vacancies
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/contact-us" className="linker nav-link-router">
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* vv */}
    </div>
  );
}

export default MainNav;
