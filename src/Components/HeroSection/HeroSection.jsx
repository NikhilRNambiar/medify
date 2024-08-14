import React from 'react';
import './HeroSection.css';
import Doctor from "../../Assets/Doctor.png"
import Category from '../Category/Category';

const HeroSection = () => {
  return (

    <div className='hero'>
      <div className="hero-container">
        <div className='textDiv'>
          <h1 className="hero-title">
            Skip the travel! Find Online<br/> <span className='medical'>Medical</span><span className='center'> Centers</span>
          </h1>
          <h2 className="hero-subtitle">
            Connect instantly with a 24x7 specialist or choose to<br/> video visit a particular doctor.
          </h2>
          <button className="hero-button">Find Centers</button>
        </div>
        <div>
          <img src={Doctor} alt="doctor" className='img'/>
        </div>
      </div>
          <Category/>
    </div>
  );
};

export default HeroSection;
