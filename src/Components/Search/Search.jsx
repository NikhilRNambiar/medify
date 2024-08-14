import React from 'react';
import './Search.css';

const Search = ({ states, cities, selectedState, selectedCity, handleStateChange, handleCityChange, handleSearch }) => {
    
  return (
    <div className="search-form">
      <select className="search" value={selectedState} onChange={handleStateChange}>
        <option value="">State</option>
        {states.map((state, index) => (
          <option key={index} value={state}>{state}</option>
        ))}
      </select>
      
      <select className="search" value={selectedCity} onChange={handleCityChange}>
        <option value="">City</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>{city}</option>
        ))}
      </select>
      
      <button className="button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
