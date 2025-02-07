
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure custom styles are applied

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0d1b2a" }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/maahi.png" // Ensure this path is correct
            alt="WorkIndia Logo"
            className="navbar-logo"
          />
          <span className="ms-2 navbar-title">
  R<span className="small-text">ail</span>
  _I<span className="small-text">ndia</span> 🚆
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
              {/* <Link className="nav-link" to="/about">
                About Me
              </Link> */}
            </li>
            {/* Add other nav items here */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
