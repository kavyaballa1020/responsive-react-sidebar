import React, { useState } from 'react';
import './Sidebar.css';
import { FiHome, FiBell, FiUser, FiGrid } from 'react-icons/fi';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                ☰
            </button>
            <nav className="nav-menu">
                <a href="#home"><FiHome /> Home</a>
                <a href="#services"><FiBell /> Services</a>
                <a href="#about"><FiUser /> About</a>
                <a href="#contact"><FiGrid /> Contact</a>
            </nav>
        </div>
    );
};

export default Sidebar;

