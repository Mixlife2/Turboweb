import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';  // Cambié la ruta de importación
import DesignOptions from '../components/DesignOptions/DesignOptions';  // Cambié la ruta de importación

function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-5">Bienvenido a TurboWeb</h1>
        <DesignOptions />
      </main>
    </div>
  );
}

export default Dashboard;
