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
                <a href="#about"><FiUser /> About</a>
                <a href="#services">Database</a>
                <a href="#case-studies">Case Studies</a>
                <a href='#blog'>Blog</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
};

export default Sidebar;

