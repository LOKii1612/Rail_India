import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About <span className="highlight">WorkIndia</span></h1>
        <p className="subtitle">Empowering the Workforce of India</p>
      </div>

      <div className="about-content">
        <p>
          <strong>WorkIndia</strong> is India's **largest blue and gray-collar job portal**, revolutionizing job searching for millions. 
          As a **technology-driven recruitment marketplace**, we provide meaningful livelihoods to **258 million blue-collar workers** across India.
        </p>

        <p>
          Our platform connects **30 million+ job seekers** with **100,000+ businesses** monthly, removing middlemen and ensuring **genuine employment opportunities**.
          With an easy-to-use interface, WorkIndia offers a **seamless job-hunting experience** for employers and employees alike.
        </p>

        <p className="mission">
          <strong>🎯 Our Mission:</strong> To **empower the blue-collar workforce** by providing a **transparent, efficient, and reliable** job search platform, bridging the gap between **job seekers and employers** nationwide.
        </p>
      </div>

      <div className="about-footer">
        <p>🚀 Join WorkIndia today & take the next step in your career!</p>
      </div>
    </div>
  );
}

export default About;
