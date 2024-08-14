import React,{ useState }  from 'react'
import HosColour from "../../Assets/HosColour.png"
import { FaThumbsUp } from "react-icons/fa6";
import BookingSlots from "../BookingSlots/BookingSlots"

import "./HospitalCard.css";

function HospitalCard({name,state,city,type,rating,need,date,time}) {
    const [showBookingSlots, setShowBookingSlots] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null); 

  const handleButtonClick = () => {
    if (showBookingSlots) {
      if (selectedSlot) {
        
        handleBookSlot({ date: selectedDate, slot: selectedSlot });
      } else {
        alert("Please select a slot before booking."); 
      }
    } else {
      setShowBookingSlots(true); 
    }
  };

  const handleBookSlot = (bookingDetails) => {
    const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    existingBookings.push({ ...bookingDetails, hospital: { name, state, city, type, rating } });
    localStorage.setItem('bookings', JSON.stringify(existingBookings));
    setShowBookingSlots(false);
    setSelectedSlot(null); 
    setSelectedDate(null);
    alert("slot booked");
  };
  return (
    <div className='total-container'>
    <div className='hos-container'>
        <div className='hos-image'>
            <div>
                <img src={HosColour} alt="hospital"/>
            </div>
            
        </div>
        <div className='hos-content'>
            <h3>{name}</h3>
            <p className='address'>{state},{city}</p>
            <p className='type'>{type}</p>
            
            <p className='free'><span className='span1'>FREE</span><span className='span2'> $500</span> Consultation fee at clinic</p>
            <div className='rating' >
                <div className='rate'>
                    <p><FaThumbsUp /></p>
                    <p>5</p>
                </div>
            </div>
            
            
        </div>
        {need==="search" && (
        <div className='hos-button'>
            <p>Available Today</p>
            <button onClick={handleButtonClick}>Book Free Center Visit</button>
        </div>
        )}

        {need==='bookings' &&(
            <div className='datentime'>
                <div className='time'>
                    <p>{time}</p>
                </div>
                <div className='date'>
                    <p>{date}</p>
                </div>

            </div>
        )}
    </div>
        {showBookingSlots && (
            <div className='booking-slots'>
            <BookingSlots onSlotSelected={setSelectedSlot} onDateSelected={setSelectedDate}/>
            </div>
        )}
    </div>
        
   
  )
}

export default HospitalCard


  

