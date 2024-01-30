import React, { useState, useCallback, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/api';
import Navbar from '../components/NavBar/NavBar';

interface Formulario {
  email: string;
  password: string;
  tipoRegistro: 'personal' | 'empresa';
  nombre?: string;
  direccion?: string;
  telefono?: string;
}

const Register: React.FC = () => {
  const [formulario, setFormulario] = useState<Formulario>({
    email: '',
    password: '',
    tipoRegistro: 'personal',
    nombre: '',
    direccion: '',
    telefono: '',
  });

  const [registroExitoso, setRegistroExitoso] = useState<boolean>(false);
  const [errorRegistro, setErrorRegistro] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulario((prevFormulario) => ({ ...prevFormulario, [name]: value }));
  }, []);

  const handleTipoRegistroChange = (tipo: 'personal' | 'empresa') => {
    setFormulario((prevFormulario) => ({ ...prevFormulario, tipoRegistro: tipo }));
  };

  const handleSubmit = async () => {
    try {
      // Añadir lógica según el tipo de registro aquí...
      const { data, error } = await supabase.auth.signUp({
        email: formulario.email,
        password: formulario.password,
      });

      if (error) {
        // Manejar errores...
      } else if (data) {
        // Lógica de éxito...
      }
    } catch (error) {
      // Manejar errores...
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Navbar />
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

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Registro
          </label>
          <div className="flex">
            <div
              className={`cursor-pointer flex items-center justify-center w-1/2 py-2 rounded ${
                formulario.tipoRegistro === 'personal' ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
              onClick={() => handleTipoRegistroChange('personal')}
            >
              Personal
            </div>
            <div
              className={`cursor-pointer flex items-center justify-center w-1/2 py-2 rounded ${
                formulario.tipoRegistro === 'empresa' ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
              onClick={() => handleTipoRegistroChange('empresa')}
            >
              Empresa
            </div>
          </div>
        </div>

        {formulario.tipoRegistro === 'empresa' && (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de la Empresa
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre de la Empresa"
                className="bg-transparent outline-none w-full py-2 px-3"
                value={formulario.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dirección de la Empresa
              </label>
              <input
                type="text"
                name="direccion"
                placeholder="Dirección de la Empresa"
                className="bg-transparent outline-none w-full py-2 px-3"
                value={formulario.direccion}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono de la Empresa
              </label>
              <input
                type="text"
                name="telefono"
                placeholder="Teléfono de la Empresa"
                className="bg-transparent outline-none w-full py-2 px-3"
                value={formulario.telefono}
                onChange={handleChange}
              />
            </div>
          </>
        )}

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
