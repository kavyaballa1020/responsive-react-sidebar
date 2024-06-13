// src/App.js
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="content">
                <h1>Welcome to My Website</h1>
                <p>Click on the menu icon to open the sidebar.</p>
            </div>
        </div>
    );
}

export default App;
