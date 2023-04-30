import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css";

const Slider = () => {
  return (
    <div>
      <div>
        <Carousel fade interval={3000}>
          <Carousel.Item>
            <img className=" w-100" src="fish.jpg" alt="Fish" />
            <Carousel.Caption>
              <h3 className="label-color">Fish</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="chicken.jpg" alt="Chicken" />

            <Carousel.Caption>
              <h3 className="label-color">Chicken</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="pizza.jpg" alt="Third slide" />

            <Carousel.Caption>
              <h3 className="label-color">Pizza</h3>
              {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
