// About.js
import React from "react";
import { Carousel } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import "../../styles/About.css";

const About = () => {
  const imagePath1 = require('../../images/about/pic1.jpg');
  const imagePath2 = require('../../images/about/pic2.jpg');

  return (
    <MDBContainer fluid className="about-container">
      <Carousel indicators={false} interval={5000}>
        <Carousel.Item>
          <img src={imagePath1} alt="pic 1" className="d-block w-100" />
        </Carousel.Item>
      </Carousel>

      <div className="about-content">
        <h2 className="mt-4">About Us</h2>
        <div className="row mt-4">
          <div className="col-md-6">
            <p className="about-text">
              <span className="highlight-text">“EAT WELL TO FEEL WELL”</span>
              <br />
              We believe in consuming and delivering 100% natural products that are unprocessed, chemical-free & which boost the nutrients, including vitamins and minerals that are good for your long-term health.
            </p>
            <p className="about-text">
              Since we are very passionate about natural products, we only sell limited products. We research each product very carefully by deep-diving into the micronutrients level and technical specifications, doing proper lab testing approved by FDA, USDA, FSSAI, etc., and collecting nutrition facts that can improve our health and diet by replacing them with highly processed and harmful foods/products that are unrefined and chemically processed.
            </p>
            <p className="about-text">
              Products that we pick are all traditionally used for over 1000 years in India and other regions. We see a lot of opportunities in the health area, so we promise to uplift the standard of people by providing them naturally & traditionally extracted products.
            </p>
          </div>
          <div className="col-md-6">
            <img src={imagePath2} alt="pic 2" className="d-block w-100 about-image" />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <p className="about-text">
              Our journey in natural products started with Fresh Indian Mangoes in 2021, and since then, we have been adding natural products to our list of offerings. After mangoes, we added a new line of categories that was Cold-Pressed Oils. We observed that cooking oils on the market shelves are mostly chemically refined and processed, which is causing high blood pressure, diabetes, cholesterol, etc., with no boost in nutrients.
            </p>
            <p className="about-text">
              Since cooking oil is something we consume almost daily in every household, we saw the opportunity to uplift people's health by replacing them with Cold-Pressed Oils. These oils are traditionally extracted in India for many years and contain the best nutrients. Our journey continues, and we will be bringing more and more natural products to fulfill our promise.
            </p>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
};

export default About;
