import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import DesignOptions from '../components/DesignOptions/DesignOptions';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/api';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        if (error instanceof Error) {
          console.error('Error al cerrar sesión:', error.message);
        } else {
          console.error('Error al cerrar sesión:', 'Ocurrió un error desconocido al cerrar sesión');
        }
      } else {
        console.log('Sesión cerrada exitosamente');
        
        navigate('/login');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error al cerrar sesión:', error.message);
      } else {
        console.error('Error al cerrar sesión:', 'Ocurrió un error desconocido al cerrar sesión');
      }
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-4xl font-bold">Bienvenido a TurboWeb</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
          >
            Cerrar Sesión
          </button>
        </div>
        <p className="text-gray-600 mb-8">
          Explora nuestros servicios de diseño y encuentra la inspiración perfecta para tu proyecto.
        </p>
        <DesignOptions />
      </main>
    </div>
  );
};

export default Dashboard;
