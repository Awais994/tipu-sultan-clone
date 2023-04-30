import React from "react";
import "./vacancies.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Vacancies() {
  const [vData, setVData] = useState({
    name: "",
    role: "",
    email: "",
    phnNumber: "",
  });
  const [disableBtn, setDisableBtn] = useState(false);
  const formSubmit = (e) => {
    e.preventDefault();
    if (
      vData.name !== "" &&
      vData.email !== "" &&
      vData.phnNumber !== "" &&
      vData.role !== ""
    ) {
      setDisableBtn(true);
      axios
        .post("http://localhost:9000/vacancies-data", vData)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Applied Succefully", {
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
      setVData({
        name: "",
        role: "",
        email: "",
        phnNumber: "",
      });
    }
  };
  return (
    <div>
      <div className="v-section-one">
        <div className="v-childSection-one">
          <h5>MAJESTIC DINING EXPERIENCE</h5>
          <h1>Vacancies at Tipu Sultan Nottingham</h1>
          <p>
            Come and join the Tipu family! Full-time and Part-time roles
            available.
          </p>
        </div>
      </div>
      <div className="v-section-two">
        <div className="v-childSection-child-one">
          <h4>
            At Tipu Sultan we are always looking to expand our team. With duties
            including taking orders, serving meals and drinks, welcoming
            customers, checking in guests, some bar work and light cleaning
            associated with the job.
          </h4>
          <h4>
            We have both part-time and full-time positions and welcome students
            to apply.
          </h4>
          <h4>We are recruiting for the following positions:</h4>
        </div>
        <div className="v-childSection-child-two">
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  {" "}
                  <h4 className="toogle-head-child">
                    BARTENDER/BAR STAFF
                  </h4>{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <h4 className="toogle-body-child">
                    <strong>
                      {" "}
                      We are looking for a few individuals who will provide
                      timely, accurate and friendly service while preparing the
                      highest quality beverages and desserts for our guests.
                    </strong>
                  </h4>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  {" "}
                  <h4 className="toogle-head-child">CHEFS</h4>{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <h4 className="toogle-body-child">
                    <strong>
                      {" "}
                      We are looking for a number of individuals that will carry
                      out all cooking duties, including preparation and
                      maintenance of all equipment. Please detail in your C.V
                      what type of restaurant food you have experience in
                      cooking. Also responsible for keeping high quality
                      standards, e.g. Cleanliness, Plate presentation, stock
                      ordering and cost control.
                    </strong>
                  </h4>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="v-childSection-child-three">
            <div>
              <h4>
                To apply for one of the advertised roles, please fill in the
                form.Our team will try and contact you within 48 hours to
                discuss any open opportunities.
              </h4>
            </div>
          </div>
          <div className="v-childSection-child-four">
            <Form className="form-v" onSubmit={formSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="v-form-label">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={vData.name}
                  onChange={(e) => setVData({ ...vData, name: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="v-form-label">Role</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setVData({ ...vData, role: e.target.value })}
                  value={vData.role}
                  required
                >
                  <option value="" disabled hidden>
                    Please Select Role
                  </option>
                  <option key={0} value="BARTENDER/BARSTAFF">
                    BARTENDER/BAR STAFF
                  </option>
                  <option key={1} value="CHEFS">
                    CHEFS
                  </option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="v-form-label">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={vData.email}
                  onChange={(e) =>
                    setVData({ ...vData, email: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="v-form-label">Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  value={vData.phnNumber}
                  onChange={(e) =>
                    setVData({ ...vData, phnNumber: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Button variant="danger" type="submit" disabled={disableBtn}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancies;
