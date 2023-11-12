import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>support@nextmovies.com</p>
      <p>Mon - Fri | 6:00 am - 5:00 pm PT</p>
      <div className="social-icons">
        <FontAwesomeIcon icon={faFacebook} style={{marginRight: "20px"}}/>
        <FontAwesomeIcon icon={faLinkedin} style={{marginRight: "20px"}}/>
        <FontAwesomeIcon icon={faTwitter} style={{marginRight: "20px"}}/>
        <FontAwesomeIcon icon={faInstagram} style={{marginRight: "20px"}}/>
        <FontAwesomeIcon icon={faYoutube} style={{marginRight: "20px"}}/>
      </div>
    </div>
  );
};

export default ContactUs;
