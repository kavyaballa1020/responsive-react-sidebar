import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Case Studies</li>
          <li>Blog</li>
          <li>Contact</li>

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
