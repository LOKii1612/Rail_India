import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import custom styles if needed

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Work_India 🚆
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trains">
                Trains
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookings">
                My Bookings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-danger text-white" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
