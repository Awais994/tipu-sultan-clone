import React from "react";
import "./tableBooking.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function TableBooking() {
  const [tableData, setTableData] = useState({
    date: "",
    time: "",
    party: "",
    name: "",
    email: "",
    phnNumber: "",
  });
  const [disableBtn, setDisableBtn] = useState(false);
  const partyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const tableForm = (e) => {
    e.preventDefault();
    if (
      tableData.date !== "" &&
      tableData.time !== "" &&
      tableData.party !== "" &&
      tableData.name !== "" &&
      tableData.email !== "" &&
      tableData.phnNumber !== ""
    ) {
      setDisableBtn(true);
      axios
        .post("http://localhost:9000/reservation-data", tableData)
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
      setTableData({
        date: "",
        time: "",
        party: "",
        name: "",
        email: "",
        phnNumber: "",
      });
    }
  };
  return (
    <div>
      <div className="TableBooking">
        <div className="TableBooking-child-one">
          <div className="TableBooking-child-one-child">
            <h4>
              {" "}
              <strong>
                For Parties Over 10 Guests Please Call{" "}
                <a
                  href="tel:01156483326"
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    marginLeft: "4px",
                    marginRight: "4px",
                  }}
                >
                  01156483326
                </a>
                (Nottingham) to book your table now!
              </strong>
            </h4>
          </div>
        </div>
      </div>
      <div className="TableBooking-child-two">
        <div>
          {" "}
          <Form onSubmit={tableForm}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  required
                  value={tableData.date}
                  onChange={(e) =>
                    setTableData({ ...tableData, date: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  value={tableData.time}
                  onChange={(e) =>
                    setTableData({ ...tableData, time: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Party</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) =>
                    setTableData({ ...tableData, party: e.target.value })
                  }
                  value={tableData.party}
                  // defaultValue={tableData.party}
                  required
                >
                  <option value="" disabled hidden>
                    Select Party
                  </option>
                  {partyArray &&
                    partyArray.length &&
                    partyArray.map((data, i) => {
                      return (
                        <option value={data} key={data}>
                          {data}
                        </option>
                      );
                    })}
                  {/* <option value="CHEFS">CHEFS</option> */}
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={tableData.name}
                  onChange={(e) =>
                    setTableData({ ...tableData, name: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={tableData.email}
                  onChange={(e) =>
                    setTableData({ ...tableData, email: e.target.value })
                  }
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Phone Number"
                  value={tableData.phnNumber}
                  onChange={(e) =>
                    setTableData({ ...tableData, phnNumber: e.target.value })
                  }
                  required
                />
              </Form.Group>
            </Row>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "5px",
              }}
            >
              <Button
                variant="primary"
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
  );
}

export default TableBooking;
