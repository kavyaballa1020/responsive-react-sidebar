import React, { useState } from 'react';
import './Sidebar.css';

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
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
};

export default Sidebar;
