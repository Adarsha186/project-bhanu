import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const MainCard = () => {
  const imagePath = require('../images/main_card1.webp');

  const cardStyle = {
    backgroundColor: '#faf5e7',
    width: '95%',
    margin: '1.5rem',
  };

  const titleStyle = {
    color: '#448451',
  };

  return (
    <MDBCard style={cardStyle}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={imagePath} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>
              <h1>
                Why{' '}
                <span style={titleStyle}>Bhanu</span>
              </h1>
            </MDBCardTitle>
            <MDBCardText>
  Discover the unparalleled advantages of choosing Bhanu products. Our commitment to sustainability,
  natural ingredients, and your well-being sets us apart. Embrace a healthier lifestyle with Bhanu's
  products.

  <br/><br/>

  <strong>Sustainability:</strong> Our products are crafted with a deep commitment to environmental
  sustainability. From sourcing to packaging, we prioritize eco-friendly practices, ensuring a
  positive impact on the planet.

  <br/><br/>

  <strong>Natural Goodness:</strong> Experience the pure essence of nature in every Bhanu product. We
  carefully select natural ingredients, free from harmful additives, delivering authenticity and
  goodness to your doorstep.

  <br/><br/>

  <strong>Healthy Living:</strong> Elevate your well-being with Bhanu's range of health-conscious
  products. We prioritize your health by providing wholesome alternatives that support your journey
  towards a healthier lifestyle.
</MDBCardText>

          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default MainCard;
