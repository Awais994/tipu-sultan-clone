import React from "react";
import "./sectionFour.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function SectionFour() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="sectionFour">
        <div className="childSection-four-1">
          <img src="Hero-logo.png" alt="" />
        </div>
        <h3>For those seeking a flavour that will conquer your taste buds.</h3>
        <div className="childSection-four-2">
          <div>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="LUNCH-MENU-2.png" />
              <Card.Body style={{ textAlign: "left" }}>
                <Card.Title>
                  Fully Open Throughout Christmas and New Year
                </Card.Title>
                <Card.Text>
                  We are fully open throughout the Christmas and New Year break.
                  Fancy celebrating the New Year in style?
                </Card.Text>
                <Button
                  variant="primary"
                  className="btn-card-div"
                  onClick={() => {
                    navigate("/learn-more");
                  }}
                >
                  LEARN MORE
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="Tipu-Sultan.png" />
              <Card.Body style={{ textAlign: "left" }}>
                <Card.Title>Majestic Dining</Card.Title>
                <Card.Text>
                  Tipu Sultan is the perfect restaurant for couples, families
                  and friends. Whether for business socialising or just getting
                  together, our beautiful restaurant is an oasis to relax and
                  enjoy the best food and drink and live like a Sultan.
                </Card.Text>
                <Button
                  variant="primary"
                  className="btn-card-div"
                  onClick={() => {
                    navigate("/our-story");
                  }}
                >
                  OUR STORY
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src="Venue.png" />
              <Card.Body style={{ textAlign: "left" }}>
                <Card.Title>Extravagant Interior</Card.Title>
                <Card.Text>
                  Dine in beautiful surroundings and enjoy tasty, fresh,
                  authentic Pakistani and Indian food. Relax with friends,
                  family and colleagues. Located on a gorgeous site on Mansfield
                  Road in Sherwood. We have designed and developed the entire
                  building to create a beautiful and luxurious restaurant to be
                  enjoyed by everyone.
                </Card.Text>
                <Button
                  variant="primary"
                  className="btn-card-div"
                  onClick={() => {
                    navigate("/reservations");
                  }}
                >
                  BOOK A TABLE
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
