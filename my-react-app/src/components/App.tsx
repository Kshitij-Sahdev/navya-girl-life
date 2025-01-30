import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="birthday-container">
      <div className="birthday-card">
        <div className="sparkles">✨</div>
        <h1>Happy Birthday!</h1>
        <h2>Dear [Name]</h2>
        <p className="message">
          Wishing you a day filled with joy, laughter, and wonderful memories!
          May all your dreams come true!
        </p>
        <div className="cake">🎂</div>
        <div className="balloons">
          🎈 🎈 🎈
        </div>
      </div>
    </div>
  );
};

export default App;