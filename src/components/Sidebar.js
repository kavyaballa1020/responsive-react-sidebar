import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaLaptopCode, FaChartBar, FaBlog, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';
import { AiFillFire } from 'react-icons/ai';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
        <div className="sidebar-header">
          <h2>{isOpen ? <> <AiFillFire />Kav-Services</> : ''}</h2>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#" className="menu-item">
              <FaHome />
              {isOpen && <span>Home</span>}
              {!isOpen && <span className="tooltip">Home</span>}
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <FaUser />
              {isOpen && <span>About</span>}
              {!isOpen && <span className="tooltip">About</span>}
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <FaLaptopCode />
              {isOpen && <span>Services</span>}
              {!isOpen && <span className="tooltip">Services</span>}
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <FaChartBar />
              {isOpen && <span>Case Studies</span>}
              {!isOpen && <span className="tooltip">Case Studies</span>}
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <FaBlog />
              {isOpen && <span>Blog</span>}
              {!isOpen && <span className="tooltip">Blog</span>}
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              <FaEnvelope />
              {isOpen && <span>Contact</span>}
              {!isOpen && <span className="tooltip">Contact</span>}
            </a>
          </li>
        </ul>
        <div className="profile-section">
          <img
            className="profile-picture"
            src={`${process.env.PUBLIC_URL}/Kavya.JPG`} // Replace with your actual image path
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
