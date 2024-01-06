
import React, { useState } from 'react';

const Register = () => {
  const [formulario, setFormulario] = useState({
    accountType: 'Personal',
    email: '',
    name: '',
    password: '',
    gender: 'Male',
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formulario);
    // Agrega aquí la lógica para enviar los datos al servidor o realizar otras acciones
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
      <div className="flex items-center justify-between mb-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="gender"
            className="form-radio text-blue-500"
            value="Male"
            checked={formulario.gender === 'Male'}
            onChange={handleChange}
          />
          <span className="ml-2">Male</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="gender"
            className="form-radio"
            value="Female"
            checked={formulario.gender === 'Female'}
            onChange={handleChange}
          />
          <span className="ml-2">Female</span>
        </label>
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
