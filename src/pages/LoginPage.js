import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'TU_URL_SUPABASE';
const supabaseAnonKey = 'TU_CLAVE_ANON_SUPABASE';
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data, error } = await supabaseClient.auth.signIn({
        email: username,
        password,
      });

      if (error) {
        console.error('Error al iniciar sesión:', error);
        // Maneja los errores de inicio de sesión de manera adecuada, por ejemplo, muestra mensajes de error
      } else {
        // Almacena la sesión del usuario y redirige
        localStorage.setItem('userSession', data.user.id);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  // ... resto del código de tu componente
}



  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-8 text-center">
        <img src="https://placehold.co/50x50" alt="Superlist logo" className="mx-auto mb-4" />
        <h1 className="text-4xl font-semibold mb-2">Welcome to TurboWeb</h1>
        <p className="text-gray-500">Made for teams.<br />Designed for people.</p>
      </div>
      <div className="bg-pink-100 p-8 rounded-lg shadow-md w-full max-w-xs">
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder=""
            aria-label="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="••••••••"
            aria-label="Password"
          />
          <p className="text-sm text-blue-500 cursor-pointer">
            <a href="/olvido-contrasena" aria-label="Forgot Password">
              ¿Olvidaste tu contraseña?
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            LOG IN
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4 mt-4">
        <button className="bg-blue-600 text-white w-64 py-2 rounded-full flex items-center justify-center shadow-lg">
          <i className="fab fa-google mr-2"></i> Continue with Google
        </button>
        <button className="bg-black text-white w-64 py-2 rounded-full flex items-center justify-center shadow-lg">
          <i className="fab fa-apple mr-2"></i> Sign in with Apple
        </button>
        <button className="bg-gray-300 text-gray-700 w-64 py-2 rounded-full flex items-center justify-center shadow-lg">
          <i className="fas fa-envelope mr-2"></i> Continue with email
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
