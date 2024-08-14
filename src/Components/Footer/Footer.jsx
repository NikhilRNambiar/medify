import React from 'react';
import './Footer.css';
import Logo from "../../Assets/Logo.png"
import facebook from "../../Assets/facebookImg.png";
import twitter from "../../Assets/twitterImg.png";
import pinterest from "../../Assets/pinterestImg.png"
import youtube from "../../Assets/youtubeImg.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Medify Logo" className='med-logo'/>
          <div style={{marginLeft:'85px'}}>
            <img src={facebook} alt="fb" style={{padding:'10px'}}/>
            <img src={twitter} alt="twitter" style={{padding:'10px'}}/>
            <img src={youtube} alt="yt" style={{padding:'10px'}}/>
            <img src={pinterest} alt="pin" style={{padding:'10px'}}/>
          </div>
        </div>
        <div className="footer-links">
            <div style={{marginRight:'30px'}}>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#pricing">Our Pricing</a></li>
                    <li><a href="#gallery">Our Gallery</a></li>
                    <li><a href="#appointment">Appointment</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                </ul>
            </div>

          <div style={{marginRight:'30px'}}>
            <ul>
                <li><a href="#orthology">Orthology</a></li>
                <li><a href="#neurology">Neurology</a></li>
                <li><a href="#dental">Dental Care</a></li>
                <li><a href="#ophthalmology">Ophthalmology</a></li>
                <li><a href="#cardiology">Cardiology</a></li>
            </ul>
          </div>

          <div >
            <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#pricing">Our Pricing</a></li>
                <li><a href="#gallery">Our Gallery</a></li>
                <li><a href="#appointment">Appointment</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;




