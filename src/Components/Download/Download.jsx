import React from 'react';
import './Download.css';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import mobiles from "../../Assets/mobiles.svg";
import Vector from "../../Assets/Vector.png"

const Download = () => {
  return (
    <div className="download-app-container">
      <div className="phone-images">
        <img src={mobiles} alt="Phone 1" />
      </div>

      <div className="download-info">
        <h2>Download the <br/><span>Medify</span> App</h2>
        <p>Get the link to download the app</p>
        <div className="sms-input-container">
          <input type="text" placeholder="+91 Enter phone number" className="phone-input" />
          <button className="sms-button">Send SMS</button>
        </div>
        <div className="store-buttons">
          <button className="store-button google-play">
            <FaGooglePlay /> Google Play
          </button>
          <button className="store-button app-store">
            <FaApple /> App Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
