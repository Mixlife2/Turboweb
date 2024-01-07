import React, { useState, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';

// Utiliza la URL y la clave específicas de tu proyecto Supabase
const supabaseUrl = 'https://ozazemjevobvwnklufsf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96YXplbWpldm9idndua2x1ZnNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4MTk2MzgsImV4cCI6MjAxOTM5NTYzOH0.puJW7NRnqhxcdlzCVVILi0LbeFNNDVdA9WJhJ_-QG2w';

const supabase = createClient(supabaseUrl, supabaseKey);

const Register = () => {
  const [formulario, setFormulario] = useState({
    accountType: 'Personal',
    email: '',
    name: '',
    password: '',
    gender: 'Male',
  });

  const handleChange = useCallback((e) => {
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = async () => {
    try {
      const { user, session, error } = await supabase.auth.signUp({
        email: formulario.email,
        password: formulario.password,
      });

      if (error) {
        throw error;
      }

      console.log('Usuario registrado exitosamente:', user, session);

    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4">Registration</h1>
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="accountType"
            className="form-radio text-blue-500"
            value="Personal"
            checked={formulario.accountType === 'Personal'}
            onChange={handleChange}
          />
          <span className="ml-2">Personal</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="accountType"
            className="form-radio"
            value="Company"
            checked={formulario.accountType === 'Company'}
            onChange={handleChange}
          />
          <span className="ml-2">Company</span>
        </label>
      </div>
      <div className="mb-4">
        <div className="flex items-center bg-blue-100 p-2 rounded">
          <i className="fas fa-envelope text-blue-500"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-transparent outline-none w-full ml-2"
            value={formulario.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center bg-blue-100 p-2 rounded">
          <i className="fas fa-user text-blue-500"></i>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="bg-transparent outline-none w-full ml-2"
            value={formulario.name}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center bg-blue-100 p-2 rounded">
          <i className="fas fa-lock text-blue-500"></i>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-transparent outline-none w-full ml-2"
            value={formulario.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="text-xs text-gray-500 mb-4">
        By clicking Register, you agree on our{' '}
        <a href="#" className="text-blue-500 underline">
          terms and condition
        </a>
        .
      </div>
      <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
