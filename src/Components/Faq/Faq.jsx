import React from 'react';
import './Faq.css';
import doctorImage from '../../Assets/doctorImage.png';
import Icon from "../../Assets/Icon.png"
import { FaSmile } from 'react-icons/fa';

const Faq = () => {
  return (
    <div className="faq-section-container">
        <div>
            <p className="faq-header">Get Your Answer</p>
            <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div className="faq-image-container">
        <img src={doctorImage} alt="Doctor with Patient" className="faq-image" />
        <div className="faq-image-overlay">
          <FaSmile className="faq-icon" />
          <div>
            <h3>84k+</h3>
            <p className='faq-patient'>Happy Patients</p>
          </div>
        </div>
        <div className='circle'>
            <img src={Icon} alt="icon"/>
        </div>
      </div>

      <div className="faq-content-container">
        
        <ul className="faq-list">
          <li>Why choose our medical for your family? <span>+</span></li>
          <li>Why we are different from others? <span>+</span></li>
          <li>Trusted & experience senior care & love <span>+</span></li>
          <li>How to get appointment for emergency cases? <span>+</span></li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Faq;

