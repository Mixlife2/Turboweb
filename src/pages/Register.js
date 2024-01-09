import React, { useState, useCallback } from 'react';
import { supabase } from '../lib/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formulario, setFormulario] = useState({
    accountType: 'Personal',
    email: '',
    name: '',
    password: '',
  });

  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [errorRegistro, setErrorRegistro] = useState(null);
  const navigate = useNavigate(); 

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormulario((prevFormulario) => ({ ...prevFormulario, [name]: value }));
  }, []);

  const handleSubmit = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: formulario.email,
        password: formulario.password,
      });
  
      if (error) {
        if (error.message.includes('already exists')) {
          setErrorRegistro('Ya existe una cuenta con este correo electrónico.');
        } else if (error.message.includes('password is too short')) {
          setErrorRegistro('La contraseña debe tener al menos 6 caracteres.');
        } else {
          throw error;
        }
      } else {
        console.log('Usuario registrado exitosamente:', user);
  
        // Muestra un mensaje de éxito
        setRegistroExitoso(true);
        setErrorRegistro(null);
  
        // Redirige al usuario a la página de inicio de sesión después de 2 segundos
        setTimeout(() => {
          navigate('/login');
        }, 4000);
      }
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
  
      // Muestra un mensaje de error específico
      setErrorRegistro('Error al registrar usuario. Por favor, intenta nuevamente.');
      setRegistroExitoso(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4">Registration</h1>

        {registroExitoso && (
          <div className="text-green-500 mb-4">
            Registro exitoso. Se ha enviado un enlace de autenticación a tu correo electrónico.
          </div>
        )}

        {errorRegistro && (
          <div className="text-red-500 mb-4">{errorRegistro}</div>
        )}

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
          <a href="/terms-and-condition" className="text-blue-500 underline">
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
