import React from 'react';
import './CardBelowHome.css'; // Import the updated styles
import HomeDarkCardLeftPic from "./images/HomeDarkCardLeftPic.png";
import HomeDarkCardRightPic from "./images/HomeDarkCardRightPic.png";

const CardBelowHome = () => {
  return (
    <div className='dark-grey-container'>
      <div className='left-pic'>
        <img src={HomeDarkCardLeftPic} alt="Dog with toy" />
      </div>
      <div className='left-para'>
        <p>Dogs<br />Man's Best Friend</p>
      </div>
      <div className='right-pic'>
        <img src={HomeDarkCardRightPic} alt="Dog pic" />
      </div>
      <div className='right-para'>
        <p className='we-do'>WHAT WE DO?</p>
        <p>
          "PawFinds is all about connecting loving families with the perfect pet"
        </p>
      </div>
    </div>
  );
};

export default CardBelowHome;
