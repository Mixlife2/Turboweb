import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-[#111827] p-5 space-y-6">
      <div className="flex items-center space-x-2 mb-5">
        <i className="fas fa-bars text-gray-400"></i>
        <span className="font-bold text-xl">TurboWeb</span>
      </div>
      <div className="mb-5">
        <input type="text" placeholder="Buscar..." className="w-full p-2 bg-[#1F2937] text-gray-300 rounded-md" />
      </div>
      <nav className="flex flex-col space-y-2">
        <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
          <i className="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </button>
        <div className="mt-4">
          <span className="text-sm text-gray-400">Servicios de Diseño</span>
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <i className="fas fa-paint-brush"></i>
            <span>Diseño Gráfico</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <i className="fas fa-mobile-alt"></i>
            <span>Apps Móviles</span>
          </button>
          {/* Agrega botones para otros servicios de diseño */}
        </div>
        <div className="mt-4">
          <span className="text-sm text-gray-400">Configuración</span>
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
            <i className="fas fa-cog"></i>
            <span>Configuración General</span>
          </button>
          {/* Agrega botones para otras configuraciones */}
        </div>
      </nav>
      <div className="mt-auto">
        <button className="bg-[#4F46E5] text-white px-4 py-2 rounded-md flex items-center space-x-2 w-full">
          <i className="fas fa-download"></i>
          <span>Obtener plantilla</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
