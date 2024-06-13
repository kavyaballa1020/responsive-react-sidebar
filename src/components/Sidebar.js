import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaLaptopCode, FaChartBar, FaBlog, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`app ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>SideBar</h3>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className="sidebar-menu">
          <li className={isOpen ? 'sidebar-menu-item' : 'sidebar-menu-item icon-only'}>
            {isOpen ? <><FaHome /> Home</> : <FaHome />}
          </li>
          <li className={isOpen ? 'sidebar-menu-item' : 'sidebar-menu-item icon-only'}>
            {isOpen ? <><FaUser /> About</> : <FaUser />}
          </li>
          <li className={isOpen ? 'sidebar-menu-item' : 'sidebar-menu-item icon-only'}>
            {isOpen ? <><FaLaptopCode /> Services</> : <FaLaptopCode />}
          </li>
          <li className={isOpen ? 'sidebar-menu-item' : 'sidebar-menu-item icon-only'}>
            {isOpen ? <><FaChartBar /> Case Studies</> : <FaChartBar />}
          </li>
          <li className={isOpen ? 'sidebar-menu-item' : 'sidebar-menu-item icon-only'}>
            {isOpen ? <><FaBlog /> Blog</> : <FaBlog />}
          </li>
          <li className={isOpen ? 'sidebar-menu-item' : 'sidebar-menu-item icon-only'}>
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
