import React, { useState, useCallback, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/api';

interface Formulario {
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formulario, setFormulario] = useState<Formulario>({
    email: '',
    password: '',
  });

  const [registroExitoso, setRegistroExitoso] = useState<boolean>(false);
  const [errorRegistro, setErrorRegistro] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulario((prevFormulario) => ({ ...prevFormulario, [name]: value }));
  }, []);

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formulario.email,
        password: formulario.password,
      });
  
      if (error) {
        if (error instanceof Error) {
          console.error('Error al registrar usuario:', error.message);
  
          if (error.message.includes('already exists')) {
            setErrorRegistro('Ya existe una cuenta con este correo electrónico.');
          } else if (error.message.includes('password is too short')) {
            setErrorRegistro('La contraseña debe tener al menos 6 caracteres.');
          } else {
            throw error;  // Lanzamos el error para que sea manejado más arriba
          }
        } else {
          console.error('Error al registrar usuario:', error);
          setErrorRegistro('Error al registrar usuario. Por favor, intenta nuevamente.');
          setRegistroExitoso(false);
        }
      } else if (data) {
        console.log('Usuario registrado exitosamente:', data.user);
  
        // Muestra un mensaje de éxito
        setRegistroExitoso(true);
        setErrorRegistro(null);
  
        // Redirige al usuario a la página de inicio de sesión después de 2 segundos
        setTimeout(() => {
          navigate('/login');
        }, 4000);
      }
    } catch (error) {
      console.error('Error desconocido al registrar usuario:', error);
  
      // Muestra un mensaje de error genérico
      setErrorRegistro('Error al registrar usuario. Por favor, intenta nuevamente.');
      setRegistroExitoso(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4">Registro</h1>

        {registroExitoso && (
          <div className="text-green-500 mb-4">
            Registro exitoso. Se ha enviado un enlace de autenticación a tu correo electrónico.
          </div>
        )}

        {errorRegistro && (
          <div className="text-red-500 mb-4">{errorRegistro}</div>
        )}

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

        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Register;
