import React, { FC } from 'react';

interface IconoAnimadoProps {
  iconClass: string;
  texto: string;
}

const IconoAnimado: FC<IconoAnimadoProps> = ({ iconClass, texto }) => {
  return (
    <div className="text-center">
      <i className={iconClass}></i>
      <p className="text-lg">{texto}</p>
    </div>
  );
};

const AnimatedIcons: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-5xl font-bold mb-6">
      We didn't reinvent the wheel, just design
      </h1>
      <p className="text-xl mb-12">
      Design as you know it is out the door. Design as you want it just arrived.
      </p>
      <div className="flex space-x-10">
        <IconoAnimado
          iconClass="fas fa-envelope fa-2x mb-4"
          texto="Subscribe to a plan and request as many designs as you want."
        />
        <IconoAnimado
          iconClass="fas fa-mobile-alt fa-2x mb-4"
          texto="Receive your design in a few business days on average, Monday to Friday."
        />
        <IconoAnimado
          iconClass="fas fa-sync fa-2x mb-4"
          texto="We will review the designs until you are 100% satisfied."
        />
      </div>
    </div>
  );
};

export default AnimatedIcons;