import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = ({ setIsDarkMode }) => {
  const [isDarkMode, setLocalIsDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    setLocalIsDarkMode(storedMode === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setLocalIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    setIsDarkMode(newMode);
  };

  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <span>{isDarkMode ? 'Modo Oscuro' : 'Modo Diurno'}</span>
    </div>
  );
};

export default DarkModeToggle;
