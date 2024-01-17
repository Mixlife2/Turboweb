import React from 'react';
import TestimonialCard from '../TestimonialCards/TestimonialCards';

const FeatureSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold">
          Es mejor "<span className="text-red-600">nunca volverás atrás</span>"
        </h1>
        <p className="mt-6 text-lg">
          Designjoy reemplaza a autónomos poco confiables y agencias costosas por una tarifa mensual fija, con diseños entregados tan rápido que te dejarán boquiabierto.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-12">
        <TestimonialCard />
        <div className="mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Totalmente asincrónico</h2>
          <p className="mb-6">
            ¿No te gustan las reuniones? Nosotros tampoco; Tanto es así que los hemos prohibido por completo.
          </p>
          <h2 className="text-3xl font-bold mb-4">Administrar con Trello</h2>
          <p className="mb-6">
            Administre su tablero de diseño usando Trello. Vea tareas activas, en cola y completadas con facilidad.
          </p>
          <h2 className="text-3xl font-bold mb-4">Invitar a miembros ilimitados del equipo</h2>
          <p>
            Invita a todo tu equipo para que cualquiera pueda enviar solicitudes y realizar un seguimiento de su progreso.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
