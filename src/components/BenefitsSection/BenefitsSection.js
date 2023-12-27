import React from 'react';

const BenefitsSection = () => {
  return (
    <div id="benefits" className="bg-gray-100 text-gray-900 min-h-screen p-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Beneficios de la Membresía</h1>
        <p className="text-xl mb-10">
          Beneficios tan buenos que nunca necesitarás ir a ningún otro lugar para realizar tu diseño. En serio.
        </p>
        <button className="bg-black text-white px-6 py-3 font-semibold rounded-md mb-20">
          Ver planes
        </button>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <img src="https://placehold.co/100x100" alt="Icon representing a design board" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-semibold mb-3">Tablero de diseño</h2>
            <p>Agregue tantas solicitudes de diseño a su tablero como desee.</p>
          </div>
          <div>
            <img src="https://placehold.co/100x100" alt="Icon representing fast delivery" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-semibold mb-3">Entrega ultrarrápida</h2>
            <p>Obtenga su diseño uno a la vez en tan solo unos días en promedio.</p>
          </div>
          <div>
            <img src="https://placehold.co/100x100" alt="Icon representing fixed monthly rate" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-semibold mb-3">Tarifa fija mensual</h2>
            <p>¡Aquí no hay sorpresas! Paga el mismo precio fijo cada mes.</p>
          </div>
          <div>
            <img src="https://placehold.co/100x100" alt="Icon representing top quality" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-semibold mb-3">Calidad de primer nivel</h2>
            <p>Una increíble calidad de diseño a tu alcance cuando la necesites.</p>
          </div>
          <div>
            <img src="https://placehold.co/100x100" alt="Icon representing flexibility and scalability" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-semibold mb-3">Flexible y escalable</h2>
            <p>Aumente o reduzca según sea necesario y pausa o cancele en cualquier momento.</p>
          </div>
          <div>
            <img src="https://placehold.co/100x100" alt="Icon representing uniqueness and ownership" className="mx-auto mb-4"/>
            <h2 className="text-2xl font-semibold mb-3">Único y todo tuyo</h2>
            <p>Cada uno de tus diseños está hecho especialmente para ti y es 100% tuyo.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
