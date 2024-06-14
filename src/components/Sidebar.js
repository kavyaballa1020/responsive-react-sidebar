import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaLaptopCode, FaChartBar, FaBlog, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';
import { AiFillFire } from 'react-icons/ai';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-header">
          <h3>{isOpen ?'' : ''}</h3>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#" className="menu-item">
              <FaHome />
              {isOpen && <span className="menu-text">Home</span>}
              {!isOpen && (
                <span className="tooltip">
                  <span className="tooltip-icon"><FaHome /></span>
                  Home
                </span>
              )}
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <FaUser />
              {isOpen && <span className="menu-text">About</span>}
              {!isOpen && (
                <span className="tooltip">
                  <span className="tooltip-icon"><FaUser /></span>
                  About
                </span>
              )}
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <FaLaptopCode />
              {isOpen && <span className="menu-text">Services</span>}
              {!isOpen && (
                <span className="tooltip">
                  <span className="tooltip-icon"><FaLaptopCode /></span>
                  Services
                </span>
              )}
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <FaBlog />
              {isOpen && <span className="menu-text">Blog</span>}
              {!isOpen && (
                <span className="tooltip">
                  <span className="tooltip-icon"><FaBlog /></span>
                  Blog
                </span>
              )}
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <FaEnvelope />
              {isOpen && <span className="menu-text">Contact</span>}
              {!isOpen && (
                <span className="tooltip">
                  <span className="tooltip-icon"><FaEnvelope /></span>
                  Contact
                </span>
              )}
            </a>
          </li>
        </ul>
        <div className="profile-section">
          <img
            className="profile-picture"
            src={`${process.env.PUBLIC_URL}/Kavya.JPG`}
            alt="Profile"
          />
          {isOpen && (
            <div className="profile-details">
              <p className="profile-name">Kavya Balla</p>
              <p className="profile-role">Web Developer</p>
            </div>
          )}
        </div>
      </div>
      <div className="content">
        <h1>Main Content Area</h1>
        <p>This is the main content of your application.</p>
      </div>
    </div>
  );
}

export default App;
