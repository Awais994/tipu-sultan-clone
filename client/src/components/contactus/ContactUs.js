import React from "react";
import "./contactUs.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function ContactUs() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phnNumber: "",
    message: "",
  });
  const [disableBtn, setDisableBtn] = useState(false);
  const formSubmit = (e) => {
    e.preventDefault();
    if (
      contactForm.name !== "" &&
      contactForm.email !== "" &&
      contactForm.phnNumber !== "" &&
      contactForm.message !== ""
    ) {
      setDisableBtn(true);
      axios
        .post("http://localhost:9000/contactUs-data", contactForm)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Recived Succefully", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
            });
            setDisableBtn(false);
          } else {
            setDisableBtn(false);
          }
        })
        .catch((err) => {
          toast.error("Something Went Wrong", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
          setDisableBtn(false);
        });
      setContactForm({
        name: "",
        email: "",
        phnNumber: "",
        message: "",
      });
    }
  };
  return (
    <div>
      <div className="ContactUs">
        <div className="childContactUs-one">
          <div className="childContactUs-one-child">
            <div className="childContact-child-one">
              <h5>visit us</h5>
              <h2>Our Locations</h2>
            </div>
            <div className="childContact-child-two">
              <div className="sub-div-child-contact-one">
                <div className="super-div-child-contact-one">
                  <h3 className="upper-case-heading">Tipu Sultan Nottingham</h3>
                  <p>482 Mansfield Road, Sherwood,</p>
                  <p>Nottingham NG5 2EL</p>
                  <p>0115 648 3326</p>

                  <p>
                    <a
                      href="mailto:nottingham@tipu-sultan.com"
                      className="link-color link-hover-contact"
                    >
                      nottingham@tipu-sultan.com
                    </a>
                  </p>
                </div>
                <div className="super-div-child-contact-two">
                  <h3 className="upper-case-heading">Tipu Sultan Leicester</h3>
                  <p>12-16, The Parade, Oadby, Leicester</p>
                  <p>LE2 5BF</p>
                  <p>0116 271 5553</p>
                  <p>
                    <a
                      href="mailto:leicester@tipu-sultan.com"
                      className="link-color link-hover-contact"
                    >
                      leicester@tipu-sultan.com
                    </a>
                  </p>
                </div>
                <div className="super-div-child-contact-three">
                  <h3 className="upper-case-heading">Tipu Sultan Birmingham</h3>
                  <p>43 Alcester Road, Birmingham</p>
                  <p>B13 8AA</p>
                  <p>0121 449 8539</p>
                  <p>
                    <a
                      href="mailto:birmingham@tipu-sultan.com"
                      className="link-color link-hover-contact"
                    >
                      birmingham@tipu-sultan.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="sub-div-child-contact-two">
                <div>
                  {" "}
                  <h3 className="upper-case-heading">Opening Hours</h3>{" "}
                  <ul>
                    <li>
                      Monday{" "}
                      <strong className="link-color">12:00PM – 11:00PM</strong>
                    </li>
                    <li>
                      Tuesday{" "}
                      <strong className="link-color">12:00PM – 11:00PM</strong>
                    </li>
                    <li>
                      Wednesday{" "}
                      <strong className="link-color">12:00PM – 11:00PM</strong>
                    </li>
                    <li>
                      Thursday{" "}
                      <strong className="link-color">12:00PM – 11:00PM</strong>
                    </li>
                    <li>
                      Friday{" "}
                      <strong className="link-color">12:00PM – 11:00PM</strong>
                    </li>
                    <li>
                      Saturday{" "}
                      <strong className="link-color">12:00PM – 11:00PM</strong>
                    </li>
                    <li>
                      Sunday{" "}
                      <strong className="link-color">12:00PM – 11:00PM</strong>
                    </li>
                  </ul>
                  <div className="social-div-contact">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/tipusultannottingham"
                      style={{ marginRight: "10px" }}
                    >
                      <FaFacebookF size={19} style={{ color: "#fff" }} />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/tipusultannottingham/"
                    >
                      <FaInstagram size={19} style={{ color: "#fff" }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="childContactUs-Two">
          <div className="sub-childContactUs-Two">
            <div className="super-childContactUs-two-one">
              <h5>Get in touch</h5>
              <h2>Contact Us</h2>
            </div>
            <div className="super-childContactUs-two-two">
              <div>
                <Form onSubmit={formSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Phone Number"
                      value={contactForm.phnNumber}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          phnNumber: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="floatingTextarea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave your message here"
                      style={{ height: "130px" }}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      variant="danger"
                      type="submit"
                      size="lg"
                      disabled={disableBtn}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
