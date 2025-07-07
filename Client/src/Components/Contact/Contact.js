import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-details">
          <h2>Let's Get in Touch</h2>

          <div className="contact-item">
            <i className="fa fa-envelope"></i>
            <a href="mailto:surajitmandalsurajit57@gmail.com" className="contact-link">
              surajitmandalsurajit57@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <i className="fa fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/surajit-mandal-900a4125b/" target="_blank" rel="noopener noreferrer" className="contact-link">
              Surajit Mandal
            </a>
          </div>

          <div className="contact-item">
            <i className="fa fa-github"></i>
            <a href="https://github.com/suraee-1" target="_blank" rel="noopener noreferrer" className="contact-link">
              @suraee-1
            </a>
          </div>
        </div>

        <div className="contact-image">
          <img src={developerPng} alt="Developer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
