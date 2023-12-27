import React from 'react';

const AnimatedIcons = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-5xl font-bold mb-6">
        No reinventamos la rueda, solo diseñamos
      </h1>
      <p className="text-xl mb-12">
        El diseño como lo conoces ya está disponible.<br/>
        Diseña como quieras recién llegado.
      </p>
      <div className="flex space-x-10">
        <IconoAnimado
          iconClass="fas fa-envelope fa-2x mb-4"
          texto="Suscríbete a un plan y solicita tantos diseños como quieras."
        />
        <IconoAnimado
          iconClass="fas fa-mobile-alt fa-2x mb-4"
          texto="Reciba su diseño en unos pocos días hábiles en promedio, de lunes a viernes."
        />
        <IconoAnimado
          iconClass="fas fa-sync fa-2x mb-4"
          texto="Revisaremos los diseños hasta que estés 100% satisfecho."
        />
      </div>
    </div>
  );
};

const IconoAnimado = ({ iconClass, texto }) => {
  return (
    <div className="text-center">
      <i className={iconClass}></i>
      <p className="text-lg">{texto}</p>
    </div>
  );
};

export default AnimatedIcons;
