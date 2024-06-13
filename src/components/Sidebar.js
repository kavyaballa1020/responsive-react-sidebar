import React, { useState } from 'react';
import './Sidebar.css';
import { FiHome, FiLayers, FiBook, FiPhone, FiSettings, FiUser } from 'react-icons/fi';
import { AiFillFire, AiOutlineMoon, AiOutlineSun } from 'react-icons/ai';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.classList.toggle('dark', newMode);
    };

    const handleNavLinkClick = () => {
        // Optionally close sidebar when a nav link is clicked
        // setIsOpen(false);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isOpen ? '☰' : '☰'}
            </button>
            <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? <AiOutlineMoon /> : <AiOutlineSun />}
            </button>
            <div className="brand-name">
                <AiFillFire /> Kavya Services
            </div>
            <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <a href="#home" onClick={handleNavLinkClick}><FiHome /> {isOpen && 'Home'}</a>
                <a href="#about" onClick={handleNavLinkClick}><FiUser /> {isOpen && 'About'}</a>
                <a href="#services" onClick={handleNavLinkClick}><FiSettings /> {isOpen && 'Services'}</a>
                <a href="#case-studies" onClick={handleNavLinkClick}><FiLayers /> {isOpen && 'Case Studies'}</a>
                <a href='#blog' onClick={handleNavLinkClick}><FiBook /> {isOpen && 'Blog'}</a>
                <a href="#contact" onClick={handleNavLinkClick}><FiPhone /> {isOpen && 'Contact'}</a>
            </nav>
            <div className={`profile-section ${isOpen ? 'open' : ''}`}>
                <div className="profile-picture">
                    <img src={process.env.PUBLIC_URL + '/Kavya.JPG'} alt="Profile" />
                </div>
                <div className="profile-info">
                    <h3>Kavya Balla</h3>
                    <p>Web Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
