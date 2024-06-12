import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <h1>Welcome to My App</h1>
        <p>Content goes here.</p>
      </div>
    </div>
  );
}

export default App;
