import React from "react";
import { Link } from "react-router-dom";
import girlHoldingADog from "./images/girlHoldingADog.png";
import homepageDog from "./images/homepageDog.png";
import footPrint from "./images/footPrint.png";
import "./HomeLandingContainer.css";

const HomeLandingContainer = ({ description }) => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className="home-landing">
      <div className="home-content">
        <div className="text-section">
          <h1 className="headline">
            <span className="highlight">Caring for Your Pets </span>
            <img src={homepageDog} alt="Dog icon" className="dog-icon" />
            <br />
            Like Family
          </h1>
          <p className="subheading">{description}</p>
          <Link to="/pets" onClick={scrollToTop}>
            <button className="cta-button">
              <img src={footPrint} alt="Footprint" style={{ width: "20px" }} />
              Adopt a Pet
            </button>
          </Link>
        </div>
        <div className="image-section">
          <img
            src={girlHoldingADog}
            alt="Girl with dog"
            className="main-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLandingContainer;
