// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./TrainList.css"; // ✅ Keep the CSS file

// const API_BASE_URL = "http://localhost:3000";

// function TrainList() {
//   const [trains, setTrains] = useState([]);
//   const [source, setSource] = useState("");
//   const [destination, setDestination] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (source.length >= 3) fetchSuggestions(source, "source");
//     if (destination.length >= 3) fetchSuggestions(destination, "destination");
//   }, [source, destination]);

//   const fetchSuggestions = async (query, type) => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/cities`, { params: { query } });
//       if (type === "source") setSuggestions(response.data);
//       else setSuggestions(response.data);
//     } catch (error) {
//       console.error("Error fetching city suggestions:", error);
//     }
//   };

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

//       {/* ✅ Search Box with Autocomplete */}
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Source"
//           value={source}
//           onChange={(e) => setSource(e.target.value)}
//           list="city-suggestions"
//         />
//         <input
//           type="text"
//           placeholder="Destination"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           list="city-suggestions"
//         />
//         <button onClick={searchTrains}>Search</button>
//       </div>

//       {/* ✅ Datalist for City Suggestions */}
//       <datalist id="city-suggestions">
//         {suggestions.map((city, index) => (
//           <option key={index} value={city} />
//         ))}
//       </datalist>

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


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TrainList.css"; // ✅ Keep the CSS file

const API_BASE_URL = "http://localhost:3000";

function TrainList() {
  const [trains, setTrains] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (source.length >= 3) fetchSuggestions(source, "source");
    if (destination.length >= 3) fetchSuggestions(destination, "destination");
  }, [source, destination]);

  const fetchSuggestions = async (query, type) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/cities`, { params: { query } });
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
    }
  };

  const searchTrains = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/trains`, {
        params: { source, destination },
      });

      // ✅ Ensure correct key is used (`available_seats` instead of `availableSeats`)
      const formattedTrains = response.data.map((train) => ({
        id: train.id,
        name: train.name,
        source: train.source,
        destination: train.destination,
        availableSeats: train.available_seats ?? "N/A", // Fix: Corrected the key name
      }));

      setTrains(formattedTrains);
    } catch (error) {
      console.error("Error fetching train details:", error);
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
      <h2 className="train-title">Search Trains</h2>

      {/* ✅ Search Box with Autocomplete */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          list="city-suggestions"
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          list="city-suggestions"
        />
        <button onClick={searchTrains}>Search</button>
      </div>

      {/* ✅ Datalist for City Suggestions */}
      <datalist id="city-suggestions">
        {suggestions.map((city, index) => (
          <option key={index} value={city} />
        ))}
      </datalist>

      {/* ✅ Train List */}
      <div className="train-list">
        {trains.map((train) => (
          <div key={train.id} className="card train-card">
            <div className="card-body">
              <h5 className="card-title">🚆 {train.name}</h5>
              <p className="card-text">📍 {train.source} → {train.destination}</p>
              <p className="card-text">🪑 Available Seats: <b>{train.availableSeats}</b></p>
              <button onClick={() => bookTrain(train.id)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainList;
