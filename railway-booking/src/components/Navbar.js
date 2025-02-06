// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import custom styles if needed

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           Work_India 🚆
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         {/* <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/dashboard">
//                 Dashboard
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/trains">
//                 Trains
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/bookings">
//                 My Bookings
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link btn btn-danger text-white" to="/logout">
//                 Logout
//               </Link>
//             </li>
//           </ul>
//         </div> */}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure custom styles are applied

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0d1b2a" }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/images.png" // Ensure this path is correct
            alt="WorkIndia Logo"
            className="navbar-logo"
          />
          <span className="ms-2 navbar-title">
  W<span className="small-text">ork</span>
  I<span className="small-text">ndia</span> 🚆
</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About WorkIndia
              </Link>
            </li>
            {/* Add other nav items here */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
