import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaLaptopCode, FaChartBar, FaBlog, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
        <div className="sidebar-header">
          <h2>{isOpen ? 'Kav-Services' : ''}</h2>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className="sidebar-menu">
          <li>
            {isOpen ? <><FaHome /> Home</> : <FaHome />}
          </li>
          <li>
            {isOpen ? <><FaUser /> About</> : <FaUser />}
          </li>
          <li>
            {isOpen ? <><FaLaptopCode /> Services</> : <FaLaptopCode />}
          </li>
          <li>
            {isOpen ? <><FaChartBar /> Case Studies</> : <FaChartBar />}
          </li>
          <li>
            {isOpen ? <><FaBlog /> Blog</> : <FaBlog />}
          </li>
          <li>
            {isOpen ? <><FaEnvelope /> Contact</> : <FaEnvelope />}
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Main Content Area</h1>
        <p>This is the main content of your application.</p>
      </div>
    </div>
  );
}

export default App;
