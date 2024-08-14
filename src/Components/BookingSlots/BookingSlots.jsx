import React, { useState } from 'react';
import { Box, Typography, Button, Tabs, Tab } from '@mui/material';

const BookingSlots = ({ onSlotSelected, onDateSelected }) => {
  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    onSlotSelected(slot); 
  };

  const handleDayChange = (event, newValue) => {
    setSelectedDay(newValue);
    const date = new Date();
    date.setDate(date.getDate() + newValue);
    const formattedDate = date.toISOString().split('T')[0];
    setSelectedDate(formattedDate);
    onDateSelected(formattedDate); 
  };

  const getFormattedDate = (daysToAdd) => {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  };

  const days = Array.from({ length: 7 }, (_, i) => ({
    label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : getFormattedDate(i),
    date: new Date().toISOString().split('T')[0] 
  }));

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={selectedDay}
        onChange={handleDayChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="day selection tabs"
      >
        {days.map((day, index) => (
          <Tab
            key={index}
            label={
              <div>
                <Typography variant="body1">{day.label}</Typography>
                <Typography variant="caption" color="#01A400">{`10 Slots Available`}</Typography>
              </div>
            }
            sx={{ minWidth: 120, textAlign: 'center' }}
          />
        ))}
      </Tabs>

      
      <Box sx={{ p: 2 }}>
        
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2,borderBottom: '1px solid #F0F0F5',pb:5  }}>
        <Typography variant="h6" sx={{ mr: 4,fontSize:'14px',fontFamily:'Poppins',color:'#414146' }}>Morning</Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexGrow: 1 }}>
          {availableSlots.morning.map((time, index) => (
            <Button key={index} variant="outlined" onClick={() => handleSlotClick(time)}
             sx={{color:'#2AA7FF',backgroundColor: selectedSlot === time ? '#B3E5FC' : 'transparent'}} >
              {time}
            </Button>
          ))}
        </Box>
      </Box>

        
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2,borderBottom: '1px solid #F0F0F5',pb:5 }}>
    <Typography variant="h6" sx={{ mr: 2.5,fontSize:'14px',fontFamily:'Poppins',color:'#414146' }}>Afternoon</Typography>
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexGrow: 1 }}>
      {availableSlots.afternoon.map((time, index) => (
        <Button key={index} variant="outlined" onClick={() => handleSlotClick(time)}
        sx={{color:'#2AA7FF',backgroundColor: selectedSlot === time ? '#B3E5FC' : 'transparent'}} >
         {time}
       </Button>
      ))}
    </Box>
  </Box>

        
    <Box sx={{ display: 'flex', alignItems: 'center',mb:3 }}>
    <Typography variant="h6" sx={{ mr: 4.2,fontSize:'14px',fontFamily:'Poppins',color:'#414146' }}>Evening</Typography>
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', flexGrow: 1 }}>
      {availableSlots.evening.map((time, index) => (
        <Button key={index} variant="outlined" onClick={() => handleSlotClick(time)}
        sx={{color:'#2AA7FF',backgroundColor: selectedSlot === time ? '#B3E5FC' : 'transparent'}} >
         {time}
       </Button>
      ))}
    </Box>
    </Box>
      </Box>
    </Box>
  );
};

export default BookingSlots;
