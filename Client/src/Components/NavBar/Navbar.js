import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="PawFinds Logo" className="navbar-logo" />
          <span className="navbar-title">{props.title}</span>
        </Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/pets">Pets</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="navbar-cta">
        <Link to="/services">
          <button className="navbar-button">Give a Pet</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
