import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import RecoverPassword from './pages/RecoverPassword';

function App(): JSX.Element {
  return (
    <div className="light-mode">
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/recoverpassword' element={<RecoverPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
