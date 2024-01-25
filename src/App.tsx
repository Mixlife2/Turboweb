import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';


function App(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Router>
        <header className="flex justify-between items-center py-6">
          <DarkModeToggle setIsDarkMode={setIsDarkMode} />
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/register' element={<Register />}  />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
