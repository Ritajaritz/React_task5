// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [birthYear, setBirthYear] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - parseInt(birthYear, 10);
    setAge(calculatedAge);
  }

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <input
        type="number"
        placeholder="Enter your birth year"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>Your age is {age} years.</p>}
    </div>
  );
}

export default App;
