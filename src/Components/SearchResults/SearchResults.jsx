import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import AppTop from '../AppTop/AppTop';
import Navbar from "../Navbar/Navbar"
import HospitalCard from '../HospitalCard/HospitalCard';
import banner from "../../Assets/banner.png";
import Faq from '../Faq/Faq';
import Download from '../Download/Download';
import Footer from '../Footer/Footer';
import "./SearchResults.css"

function SearchResults() {
  const location = useLocation(); 
  const initialState = location.state || {};
  const [state, setState] = useState(initialState.state || '');
  const [city, setCity] = useState(initialState.city || '');
  const [centers, setCenters] = useState([]);
  const [totalResults, setTotalResults] = useState(0);



  useEffect(() => {
    if (state && city) {
      fetchCenters(state, city);
    }
  }, [state, city]);

  const fetchCenters = async (state, city) => {
      try {
        const response = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
        setCenters(response.data);
        setTotalResults(response.data.length);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching medical centers:', error);
      }
  };

  const handleSearch = () => {
    if (state && city) {
      fetchCenters(state, city);
    }
  };

  return (
    <div>
        <AppTop/>
        <Navbar type="search"/>
        <div className='blue'>
        </div>
        <div className='search-div'>
        <input 
            type="text" 
            placeholder='state' 
            value={state} 
            onChange={(e) => setState(e.target.value)}
          />
          <input 
            type="text" 
            placeholder='city' 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
          />
          <button className='search-button' onClick={handleSearch}>Search</button>
        </div>
        <div className='searchRes'>
            <p className='para2'>{totalResults} medical centers available in {state}</p>
            <p className='para1'>Book appointments with minimum wait-time & verified doctor details</p>
        </div>
        
          <div className='card-div'>
            <div className='hospital-card'>
              {centers.length ? (
                centers.map((center, index) => (
                  <HospitalCard 
                    key={index}
                    name={center["Hospital Name"]}
                    state={state}
                    city={city}
                    type={center["Hospital Type"]}
                    rating={center["Hospital overall rating"]} 
                    need="search"
                  />
                ))
              ) : (
                <p>No medical centers found.</p>
              )}
          
            </div>
              <img src={banner} alt="banner" className='banner'/>
          </div>

          <div className='search-faq'>
              <Faq/>
          </div>
          <Download/>
          <Footer/>
        

    </div>
  );
}

export default SearchResults;


