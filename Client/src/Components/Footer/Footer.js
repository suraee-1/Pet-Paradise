import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div className="below-footer">
        <p>
          You can reach me at{" "}
          <a className="mail-links" href="surajitmandalsurajit57@gmail.com\\">
            surajitmandalsurajit57@gmail.com
          </a>
        </p>
        
        <p>&copy; 2025 IT GROUP -2</p>
      </div>
    </footer>
  );
};

export default Footer;
