import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Button } from 'react-bootstrap';
import '../styles/WholesaleForm.css'
import backgroundImage from '../images/wholesale.jpeg'

const WholesaleForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      to_email: "contactbhanuimpex@gmail.com",
      email: formData.email,
      phone: formData.phone,
      inquiry: formData.inquiry,
    };

    emailjs
      .send(
        "service_hcq9jd5",
        "template_hq484hd",
        templateParams,
        "udxPv-KXfNnXR4xqQ"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Your request has been received. Someone will reach out to you in the next 48 business hours.");
        },
        (error) => {
          console.error("Email send failed:", error);
        }
      );
  };

  return (
    <div className="wholesale-form-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="form-container">
        <h2>Bulk & Special Orders</h2>
        <p>Do you have special or bulk requirement? Fill up the form below to make an inquiry for wholesale orders. We look forward to serve you!</p>
        <p>Got any questions? Call us at +1(925)364-4786 (USA PST time) or +91 9892747241 (India IST time) and someone will reach out to you in next 48 business hours.</p>
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group controlId="firstName" className="form-group">
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="lastName" className="form-group">
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="email" className="form-group">
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="phone" className="form-group">
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="inquiry" className="form-group">
            <Form.Control
              as="textarea"
              placeholder="Enter your product inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="button">
            Submit
          </Button>
        </Form>
      </div>
    </div>
 );
};

export default WholesaleForm;