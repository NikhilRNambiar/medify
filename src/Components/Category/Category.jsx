import React, { useEffect, useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import Search from '../Search/Search';
import Ambulance from "../../Assets/Ambulance.png"
import Capsule from "../../Assets/Capsule.png"
import DoctorIcon from "../../Assets/DoctorIcon.png"
import Drugstore from "../../Assets/Drugstore.png"
import Hospital from "../../Assets/Hospital.png"
import "./Category.css";

function Category() {

    const [states,setStates]=useState([]);
    const [city,setCity]=useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        const fetchState=async()=>{
            try{
                const response= await axios.get(`https://meddata-backend.onrender.com/states`);
                setStates(response.data);
                console.log(response.data);
            }
            catch(error){
                    console.log("Error fetching states:", error);
            }
        }
        fetchState();
    },[])


    useEffect(()=>{
        const fetchCities = async () => {
            if (selectedState) {
              try {
                const response = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`);
                setCity(response.data);
              } catch (err) {
                console.error("Error fetching cities:", err);
            
              }
            }
        }
        fetchCities();
        
    },[selectedState])


    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity(""); 
    }
    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
      };

      const handleSearch = () => {
        if (selectedState && selectedCity) {
            navigate('/search', { state: { state: selectedState, city: selectedCity } });
        }
      };

  return (
    
        <div className='container'>
            <div className='search-divison'>
                {/* <select className='search' value={selectedState} onChange={handleStateChange}>
                <option value="">State</option>
                    {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                ))}
                 </select>
                 <select className='search' value={selectedCity} onChange={handleCityChange}>
                    <option value="">City</option>
                    {city.map((cities, index) => (
                    <option key={index} value={cities}>{cities}</option>
                ))}
                    </select>
                <button className='button' onClick={handleSearch}>Search</button> */}
                <Search
                    states={states}
                    cities={city}
                    selectedState={selectedState}
                    selectedCity={selectedCity}
                    handleStateChange={handleStateChange}
                    handleCityChange={handleCityChange}
                    handleSearch={handleSearch}
                />
            </div>
            <div className='text'>
                <p>You may be looking for</p>
            </div>
            
            <div className='category'>
                <div className='category-icon'>
                    <img src={DoctorIcon} alt="Doctor"/>
                    <p>Doctor</p>
                </div>
                <div className='category-icon'>
                    <img src={Drugstore} alt="Drugstore"/>
                    <p>Labs</p>
                </div>
                <div className='category-icon'>
                    <img src={Hospital} alt="Hospital"/>
                    <p>Hospitals</p>
                </div>
                <div className='category-icon'>
                    <img src={Capsule} alt="Capsule"/>
                    <p>Medical Store</p>
                </div>
                <div className='category-icon'>
                    <img src={Ambulance} alt="Ambulance"/>
                    <p>Ambulance</p>
                </div>
            </div>
        </div>

  )
}

export default Category