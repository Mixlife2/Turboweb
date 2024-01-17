import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';

interface DarkModeToggleProps {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ setIsDarkMode }) => {
  const [isDarkMode, setLocalIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    setLocalIsDarkMode(storedMode === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setLocalIsDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
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
