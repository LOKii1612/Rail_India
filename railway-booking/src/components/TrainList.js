// import React, { useState } from 'react';
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000';

// function TrainList() {
//   const [trains, setTrains] = useState([]);
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');

//   const searchTrains = async () => {
//     const response = await axios.get(`${API_BASE_URL}/trains`, { params: { source, destination } });
//     setTrains(response.data);
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Search Trains</h2>
//       <input type="text" placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} className="form-control mb-2" />
//       <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} className="form-control mb-2" />
//       <button onClick={searchTrains} className="btn btn-primary">Search</button>

//       <ul className="mt-3">
//         {trains.map((train) => (
//           <li key={train.id}>{train.name} ({train.source} - {train.destination})</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TrainList;
// import React, { useState } from 'react';
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000';

// function TrainList() {
//   const [trains, setTrains] = useState([]);
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [error, setError] = useState('');
//   const token = localStorage.getItem('token');

//   const searchTrains = async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/trains`, {
//         params: { source, destination },
//       });
//       setTrains(response.data);
//       setError('');
//     } catch (error) {
//       console.error('Error fetching trains:', error);
//       setError('Failed to fetch trains.');
//     }
//   };

//   const handleBookTrain = async (trainId) => {
//     if (!token) {
//       alert('Please log in to book a train.');
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${API_BASE_URL}/book`,
//         { train_id: trainId },
//         { headers: { Authorization: token } }
//       );
//       alert(`Booking Successful! Booking ID: ${response.data.bookingId}`);
//     } catch (error) {
//       console.error('Booking error:', error);
//       alert('Failed to book train.');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Search Trains</h2>
//       <input
//         type="text"
//         placeholder="Source"
//         value={source}
//         onChange={(e) => setSource(e.target.value)}
//         className="form-control mb-2"
//       />
//       <input
//         type="text"
//         placeholder="Destination"
//         value={destination}
//         onChange={(e) => setDestination(e.target.value)}
//         className="form-control mb-2"
//       />
//       <button onClick={searchTrains} className="btn btn-primary">Search</button>

//       {error && <p className="text-danger mt-3">{error}</p>}

//       <ul className="mt-3 list-group">
//         {trains.map((train) => (
//           <li key={train.id} className="list-group-item d-flex justify-content-between align-items-center">
//             {train.name} ({train.source} - {train.destination})
//             <button className="btn btn-success" onClick={() => handleBookTrain(train.id)}>
//               Book Now
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TrainList;

// import React, { useState } from "react";
// import axios from "axios";
// import "./TrainList.css"; // Custom styles

// const API_BASE_URL = "http://localhost:3000";

// function TrainList() {
//   const [trains, setTrains] = useState([]);
//   const [source, setSource] = useState("");
//   const [destination, setDestination] = useState("");
//   const token = localStorage.getItem("token");

//   const searchTrains = async () => {
//     const response = await axios.get(`${API_BASE_URL}/trains`, { params: { source, destination } });
//     setTrains(response.data);
//   };

//   const bookTrain = async (trainId) => {
//     try {
//       await axios.post(`${API_BASE_URL}/book`, { train_id: trainId }, { headers: { Authorization: token } });
//       alert("Train booked successfully!");
//     } catch (error) {
//       console.error("Booking error:", error);
//       alert("Failed to book the train.");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Search Trains</h2>
//       <div className="search-box">
//         <input type="text" placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} className="form-control" />
//         <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} className="form-control" />
//         <button onClick={searchTrains} className="btn btn-primary">Search</button>
//       </div>

//       <div className="train-list">
//         {trains.map((train) => (
//           <div key={train.id} className="card train-card">
//             <div className="card-body">
//               <h5 className="card-title">{train.name}</h5>
//               <p className="card-text">{train.source} → {train.destination}</p>
//               <button onClick={() => bookTrain(train.id)} className="btn btn-success">Book Now</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TrainList;


// import React, { useState } from "react";
// import axios from "axios";
// import "./TrainList.css"; // ✅ Import the new CSS file

// const API_BASE_URL = "http://localhost:3000";

// function TrainList() {
//   const [trains, setTrains] = useState([]);
//   const [source, setSource] = useState("");
//   const [destination, setDestination] = useState("");
//   const token = localStorage.getItem("token");

//   const searchTrains = async () => {
//     const response = await axios.get(`${API_BASE_URL}/trains`, { params: { source, destination } });
//     setTrains(response.data);
//   };

//   const bookTrain = async (trainId) => {
//     try {
//       await axios.post(`${API_BASE_URL}/book`, { train_id: trainId }, { headers: { Authorization: token } });
//       alert("🚆 Train booked successfully!");
//     } catch (error) {
//       console.error("Booking error:", error);
//       alert("❌ Failed to book the train.");
//     }
//   };

//   return (
//     <div className="train-container">
//       <h2 className="train-title">Search Trains</h2>

//       {/* ✅ Search Box */}
//       <div className="search-box">
//         <input type="text" placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} />
//         <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
//         <button onClick={searchTrains}>Search</button>
//       </div>

//       {/* ✅ Train List */}
//       <div className="train-list">
//         {trains.map((train) => (
//           <div key={train.id} className="card train-card">
//             <div className="card-body">
//               <h5 className="card-title">🚆 {train.name}</h5>
//               <p className="card-text">📍 {train.source} → {train.destination}</p>
//               <button onClick={() => bookTrain(train.id)}>Book Now</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TrainList;


import React, { useState } from "react";
import axios from "axios";
import "./TrainList.css"; // Import the new CSS file

const API_BASE_URL = "http://localhost:3000";

function TrainList() {
  const [trains, setTrains] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const token = localStorage.getItem("token");

  const searchTrains = async () => {
    if (!source.trim() || !destination.trim()) {
      alert("❗ Please enter both Source and Destination.");
      return;
    }
    try {
      const response = await axios.get(`${API_BASE_URL}/trains`, {
        params: { source, destination },
      });
      setTrains(response.data);
    } catch (error) {
      console.error("Error fetching trains:", error);
      alert("❌ Failed to fetch trains.");
    }
  };

  const bookTrain = async (trainId) => {
    try {
      await axios.post(
        `${API_BASE_URL}/book`,
        { train_id: trainId },
        { headers: { Authorization: token } }
      );
      alert("🚆 Train booked successfully!");
    } catch (error) {
      console.error("Booking error:", error);
      alert("❌ Failed to book the train.");
    }
  };

  return (
    <div className="train-container">
      <h2 className="train-title">🚆 Search for Trains</h2>

      {/* ✅ Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Source Station"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination Station"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={searchTrains}>🔍 Search</button>
      </div>

      {/* ✅ Train List */}
      <div className="train-list">
        {trains.length === 0 ? (
          <p className="no-trains">No trains available for the selected route.</p>
        ) : (
          trains.map((train) => (
            <div key={train.id} className="train-card">
              <h5 className="train-name">🚆 {train.name}</h5>
              <p className="train-route">
                📍 {train.source} → {train.destination}
              </p>
              <button className="book-btn" onClick={() => bookTrain(train.id)}>
                Book Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TrainList;
