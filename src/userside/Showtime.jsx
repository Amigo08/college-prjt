import { Button } from '@mui/material';
import React from 'react';

const showtimes = [
  {
    id: 1,

    time: '10:00 AM',

   
    
  },
  {
    id: 2,
    time: '1:00 PM',
  },
  {
    id: 3,
    time: '4:00 PM',
  },
  {
    id: 4,
    time: '7:00 PM',
  },
  {
    id: 5,
    time: '11:00 AM',
  },
  {
    id: 6,
    time: '2:00 PM',
  },
  {
    id: 7,
    time: '5:00 PM',
  },
  {
    id: 8,
    time: '8:00 PM',
  },
  // Add more showtime objects as needed
];

const ShowtimePage = () => {
  return (
    <div className="showtime-page">
      <h2>Showtimes</h2>
      <div className="showtime-list">
        {showtimes.map(showtime => (
          <div key={showtime.id} className="showtime">
            <h3>{showtime.time}</h3>
            <Button variant="10:00 AM">10:00 AM</Button>
            {/* You can add more details like movie title, theater, etc. */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowtimePage;
