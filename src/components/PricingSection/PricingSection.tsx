import React from 'react';
import PricingCard from '../PricingCard/PricingCard';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';

const PricingSection: React.FC = () => {
  return (
    <div id="pricing" className="bg-gray-100 p-10">
      <div className="grid grid-cols-3 gap-4">
        <PricingCard
          title="Estándar"
          description="Una solicitud a la vez. Pausa o cancela en cualquier momento."
          price="$4,995/m"
          buttonText="Empezar"
          includedItems={[
            "Una solicitud a la vez",
            "Entrega promedio en 48 horas",
            "Marcas ilimitadas",
            "Usuarios ilimitados",
            "Fotos de archivo ilimitadas a través de Shutterstock",
            "Pagos fáciles con tarjeta de crédito",
            "Pausar o cancelar en cualquier momento"
          ]}
        />
        <PricingCard
          title="Pro"
          description="Duplica las solicitudes. Pausa o cancela en cualquier momento."
          price="$7,995/m"
          buttonText="Empezar"
          includedItems={[
            "Dos solicitudes a la vez",
            "Entrega promedio en 48 horas",
            "Marcas ilimitadas",
            "Usuarios ilimitados",
            "Fotos de archivo ilimitadas a través de Shutterstock",
            "Pagos fáciles con tarjeta de crédito",
            "Pausar o cancelar en cualquier momento"
          ]}
        />
        <AdditionalInfo
          title="Recomiende a un amigo y gane"
          description="Gana 5% de comisiones recurrentes mensuales por cada referencia."
          buttonText="Únete ahora"
          imageUrl="https://placehold.co/300x200"
          imageAlt="Two hands pulling on a rope, symbolizing a referral program"
        />
      </div>
    </div>
  );
};

export default PricingSection;
