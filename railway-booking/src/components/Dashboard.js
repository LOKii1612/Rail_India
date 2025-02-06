// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Dashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Dashboard</h2>
//       <ul>
//         <li><Link to="/trains">View Available Trains</Link></li>
//         <li><Link to="/bookings">Your Bookings</Link></li>
//       </ul>
//       <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Dashboard;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css'; // ✅ Import the new CSS file

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to Work_India Rail_Way</h2>

      <div className="dashboard-card">
        <ul className="dashboard-links">
          <li><Link to="/trains" className="dashboard-link">🚆 View Available Trains</Link></li>
          <li><Link to="/bookings" className="dashboard-link">📋 Your Bookings</Link></li>
        </ul>
      </div>

      <button className="dashboard-btn" onClick={handleLogout}>🚪 Logout</button>
    </div>
  );
}

export default Dashboard;
