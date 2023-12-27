
import React from 'react';

const WebflowSection = () => {
  return (
    <div className="bg-black text-white p-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded">
            AÑADIR
          </button>
        </div>
        <h1 className="text-4xl font-bold mb-4">Desarrollo de flujo web</h1>
        <p className="mb-6">
          Obtenga un mejor sitio web más rápido con el desarrollo de Webflow. Requiere una suscripción de diseño.
        </p>
        <div className="text-4xl font-bold">
          $999/mes
        </div>
      </div>
    </div>
  );
};

export default WebflowSection;
