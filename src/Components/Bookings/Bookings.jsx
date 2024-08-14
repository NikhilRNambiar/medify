import React, { useEffect, useState } from 'react';
import AppTop from '../AppTop/AppTop';
import Navbar from '../Navbar/Navbar';
import HospitalCard from '../HospitalCard/HospitalCard';
import banner from "../../Assets/banner.png";
import Download from '../Download/Download';
import Footer from '../Footer/Footer';
import "./Bookings.css"

function Bookings() {
    const [booking, setBooking] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBooking(storedBookings);
    console.log(storedBookings)
  }, []);
  return (
    <div>
        <AppTop/>
        <Navbar type="search"/>
        <div className='booking-div'>
            <h2>My Bookings</h2>
        </div>
        <div className='booking-search'>
            <input type="text" placeholder='Search By Hospital'/>
            <button>Search</button>
        </div>
        <div style={{display:'flex'}}>
        <div className='booking-card'>
        {booking.length > 0 ? (
                    booking.map((bookingItem, index) => (
                        <div key={index}>
                            <HospitalCard
                              name={bookingItem.hospital.name}
                              state={bookingItem.hospital.state}
                              city={bookingItem.hospital.city}
                              type={bookingItem.hospital.type}
                              rating={bookingItem.hospital.rating}
                              need="bookings"
                              date={bookingItem.date}
                              time={bookingItem.slot}
                            />
                        </div>
                    ))
                ) : (
                    <p>No bookings available.</p>
                )}
        </div>
            <img src={banner} alt="banner" className='banner1'/>
        </div>
        <Download/>
        <Footer/>
    </div>
  )
}

export default Bookings