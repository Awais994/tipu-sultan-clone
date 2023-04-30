import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SecondNav() {
  const [expanded, setExpanded] = useState(false);
  const closeNav = () => {
    setExpanded(false);
  };
  return (
    <Navbar expand="xxl" id="nav2" expanded={expanded}>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="/logo.png" alt="Logo" style={{ width: "253px" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav className="linker2"> */}
            <Link to="/" className="linker2 nav-link-router" onClick={closeNav}>
              Home
            </Link>
            <NavDropdown
              title="Menu"
              id="basic-nav-dropdown"
              className="linker2"
            >
              <NavDropdown.Item as="li" className="linker2">
                <Link
                  to="/restaurant-menu"
                  className="nav-link-router"
                  onClick={closeNav}
                >
                  Main Menu
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link
              to="/reservations"
              className="linker2 nav-link-router"
              onClick={closeNav}
            >
              Reservations
            </Link>
            <Link
              to="/Offers"
              className="linker2 nav-link-router"
              onClick={closeNav}
            >
              Offers
            </Link>
            <NavDropdown
              title="Our Story"
              id="basic-nav-dropdown"
              className="linker2"
            >
              <NavDropdown.Item as="li" className="linker2">
                {" "}
                <Link
                  to="/our-story"
                  className="nav-link-router"
                  onClick={closeNav}
                >
                  Story
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item as="li" className="linker2">
                {" "}
                <Link
                  to="/vacancies"
                  className="nav-link-router"
                  onClick={closeNav}
                >
                  Vacancies
                </Link>
              </NavDropdown.Item>
            </NavDropdown>{" "}
            <Link
              to="/contact-us"
              className="linker2 nav-link-router"
              onClick={closeNav}
            >
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SecondNav;
