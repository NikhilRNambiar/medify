import React from 'react'
import AppTop from '../AppTop/AppTop'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection';
import Carousel from '../Carousel/Carousel';
import Specialization from '../Specialization/Specialization';
import PatientCaring from '../PatientCaring/PatientCaring';
import Blog from '../Blog/Blog';
import Family from '../Family/Family';
import Faq from '../Faq/Faq';
import Download from '../Download/Download';
import Footer from '../Footer/Footer';

import "./Home.css";

function Home() {
  return (
    <>
      <div style={{display:'flex',flexDirection:'column'}}>
        <AppTop/>
        <Navbar/>
        <HeroSection/>
        <Carousel type="offers"/>
        <Specialization/>
        <Carousel type="doctors"/>
        <PatientCaring/>
        <Blog/>
        <Family/>
        <div className='faq'>
          <Faq/>
        </div>
        <div className='download'>
          <Download/>
        </div>
        <div className='footer1'>
          <Footer/>
        </div>
        
        
      </div>
    </>
  )
}

export default Home