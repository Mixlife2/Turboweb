import React, { useState, ChangeEvent } from 'react';
import { supabase } from '../lib/api';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Error al iniciar sesión:', (error as any).message);
      } else if (data) {
        console.log('Inicio de sesión exitoso:', data.user);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error al iniciar sesión', (error as any).message);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="w-96">
          <div className="flex justify-center mb-10">
            <img src="https://placehold.co/100x40" alt="Company logo" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-user text-gray-400"></i>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Escribí tu mail o documento"
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-lock text-gray-400"></i>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Escribí tu contraseña"
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-transparent hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registra tu negocio
            </button>
          </div>
          <div className="mt-6 flex justify-center text-xs text-gray-500">
            Protegido por reCAPTCHA -{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Privacidad
            </a>{' '}
            -{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Condiciones
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-blue-500 flex justify-center items-center">
        <img
          src="https://placehold.co/300x300"
          alt="Illustration of online shopping with a shopping bag, coins, and a browser window."
          className="max-w-xs"
        />
      </div>
    </div>
  );
}

export default LoginPage;
