import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import DesignOptions from '../components/DesignOptions/DesignOptions';

function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-5">Bienvenido a TurboWeb</h1>
        <p className="text-gray-600 mb-8">
          Explora nuestros servicios de diseño y encuentra la inspiración perfecta para tu proyecto.
        </p>
        <DesignOptions />
      </main>
    </div>
  );
}

export default Dashboard;
