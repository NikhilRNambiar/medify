import React from 'react';
import HosIcon from "../../Assets/HosIcon.png";
import MedicIcon from "../../Assets/MedicIcon.png";
import LifeIcon from "../../Assets/LifeIcon.png";
import NurseIcon from "../../Assets/NurseIcon.png";
import './Family.css';  

const Family = () => {
  return (
    <div className="family-container">
      <div className="text-content">
        <p className="blue-text">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
        <h2 className='ourfamily-text'>Our Families</h2>
        <p className="description">
          We will work with you to develop individualized care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all inquiries sensitively and in the strictest confidence.
        </p>
      </div>
      
      <div className="cards-container">

        <div style={{display:'flex',flexDirection:'column',height:'714px'}}>
            <div className='move'>
            <div className="card1">
                <div>
                    <img src={LifeIcon} alt="life"/>
                </div>
                <h3>5000+</h3>
                <p>Happy Patients</p>
            </div>

            <div className="card1">
                <div>
                    <img src={MedicIcon} alt="medicals"/>
                </div>
                
                <h3>1000+</h3>
                <p>Laboratories</p>
            </div>
            </div>
        </div>

        <div className='move2'>
            <div className="card1">
                <div>
                    <img src={HosIcon} alt="hospital"/>
                </div>
                <h3>200+</h3>
                <p>Hospitals</p>
                </div>

            <div className="card1">
                <div>
                    <img src={NurseIcon} alt="Nurse"/>
                </div>
                <h3>700+</h3>
                <p>Expert Doctors</p>
            </div>
        </div>


      </div>
    </div>
  );
}

export default Family;
