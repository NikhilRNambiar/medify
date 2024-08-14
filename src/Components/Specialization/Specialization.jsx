import React from 'react';
import Blood from "../../Assets/Blood.png";
import Dentistry from "../../Assets/Dentistry.png";
import Lab from "../../Assets/Lab.png";
import MRI from "../../Assets/MRI.png";
import Cardio from "../../Assets/Cardio.png";
import Primary from "../../Assets/Primary.png";
import Poscologist from "../../Assets/Piscologist.png";
import Xray from "../../Assets/Xray.png";
import "./Specialization.css";

function Specialization() {
  return (
    <div className='container-specialization'>
      <div className='sp-text'>
        <p>Find By Specialization</p>
      </div>
      <div className='specialization-grid'>
        <div className='grid-item'>
          <img src={Dentistry} alt="dentistry" />
        </div>
        <div className='grid-item'>
          <img src={Cardio} alt="cardio" />
        </div>
        <div className='grid-item'>
          <img src={Blood} alt="blood" />
        </div>
        <div className='grid-item'>
          <img src={Lab} alt="lab" />
        </div>
        <div className='grid-item'>
          <img src={MRI} alt="mri" />
        </div>
        <div className='grid-item'>
          <img src={Primary} alt="primary care" />
        </div>
        <div className='grid-item'>
          <img src={Poscologist} alt="poscologist" />
        </div>
        <div className='grid-item'>
          <img src={Xray} alt="x-ray" />
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><button className='sp-button'>View All</button></div>
    </div>
  );
}

export default Specialization;
