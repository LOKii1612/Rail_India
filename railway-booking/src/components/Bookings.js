// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; 

// const API_BASE_URL = 'http://localhost:3000';

// function Bookings() {
//   const [bookingId, setBookingId] = useState('');
//   const [booking, setBooking] = useState(null);
//   const [error, setError] = useState('');
//   const token = localStorage.getItem('token');

//   const fetchBookingDetails = async () => {
//     if (!token) {
//       setError('Unauthorized access. Please log in.');
//       return;
//     }
    
//     if (!bookingId) {
//       setError('Please enter a valid Booking ID.');
//       return;
//     }

//     try {
//       const response = await axios.get(`${API_BASE_URL}/booking/${bookingId}`, {
//         headers: { Authorization: token },
//       });
//       setBooking(response.data);
//       setError('');
//     } catch (error) {
//       console.error('Error fetching booking details:', error);
//       setError('Booking not found or unauthorized.');
//       setBooking(null);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Check Booking Details</h2>

//       {/* Booking ID Input */}
//       <input
//         type="text"
//         placeholder="Enter Booking ID"
//         value={bookingId}
//         onChange={(e) => setBookingId(e.target.value)}
//         className="form-control mb-2"
//       />
//       <button onClick={fetchBookingDetails} className="btn btn-primary">
//         Get Booking Details
//       </button>

//       {/* Error Message */}
//       {error && <p className="text-danger mt-3">{error}</p>}

//       {/* Booking Details */}
//       {booking && (
//         <div className="card mt-3 p-3">
//           <h5>Train Details- {booking.train_name}</h5>
//           <p><strong>Train ID:</strong> {booking.train_id}</p>
//           {/* <p><strong>Date:</strong> {booking.date}</p>
//           <p><strong>Seat Number:</strong> {booking.seat_number}</p> */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Bookings;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; 

// const API_BASE_URL = 'http://localhost:3000';

// function Bookings() {
//   const [bookingId, setBookingId] = useState('');
//   const [booking, setBooking] = useState(null);
//   const [error, setError] = useState('');
//   const token = localStorage.getItem('token');

//   const fetchBookingDetails = async () => {
//     if (!token) {
//       setError('Unauthorized access. Please log in.');
//       return;
//     }
    
//     if (!bookingId) {
//       setError('Please enter a valid Booking ID.');
//       return;
//     }

//     try {
//       const response = await axios.get(`${API_BASE_URL}/booking/${bookingId}`, {
//         headers: { Authorization: token },
//       });
//       setBooking(response.data);
//       setError('');
//     } catch (error) {
//       console.error('Error fetching booking details:', error);
//       setError('Booking not found or unauthorized.');
//       setBooking(null);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Check Booking Details</h2>

//       {/* Booking ID Input */}
//       <input
//         type="text"
//         placeholder="Enter Booking ID"
//         value={bookingId}
//         onChange={(e) => setBookingId(e.target.value)}
//         className="form-control mb-2"
//       />
//       <button onClick={fetchBookingDetails} className="btn btn-primary">
//         Get Booking Details
//       </button>

//       {/* Error Message */}
//       {error && <p className="text-danger mt-3">{error}</p>}

//       {/* Booking Details */}
//       {booking && (
//         <div className="card mt-3 p-3">
//           <h5>Train Details- {booking.train_name}</h5>
//           <p><strong>Train ID:</strong> {booking.train_id}</p>
//           {/* <p><strong>Date:</strong> {booking.date}</p>
//           <p><strong>Seat Number:</strong> {booking.seat_number}</p> */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Bookings;


import React, { useState } from 'react';
import axios from 'axios';
import './Bookings.css'; // Import the new CSS file

const API_BASE_URL = 'http://localhost:3000';

function Bookings() {
  const [bookingId, setBookingId] = useState('');
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  const fetchBookingDetails = async () => {
    if (!token) {
      setError('Unauthorized access. Please log in.');
      return;
    }
    
    if (!bookingId.trim()) {
      setError('Please enter a valid Booking ID.');
      return;
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/booking/${bookingId}`, {
        headers: { Authorization: token },
      });
      setBooking(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching booking details:', error);
      setError('Booking not found or unauthorized.');
      setBooking(null);
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-box">
        <h2>Check Booking Details</h2>
        <input
          type="text"
          placeholder="Enter Booking ID"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          className="input-field"
        />
        <button onClick={fetchBookingDetails} className="fetch-btn">
          Get Booking Details
        </button>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Booking Details */}
        {booking && (
          <div className="booking-card">
            <h5>Train Details - {booking.train_name}</h5>
            <p><strong>Train ID:</strong> {booking.train_id}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookings;
