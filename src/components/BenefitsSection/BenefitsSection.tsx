import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const icons = require('../../assets/icons/recargar.gif');



const BenefitsSection: React.FC = () => {
  return (
    <div id="benefits" className="benefits-section text-gray-900 min-h-screen p-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Membership Benefits</h1>
        <p className="text-xl mb-10">
        Benefits so good you'll never need to go anywhere else to get your design done. Oh really.
        </p>
        
        <ScrollLink to="pricing" smooth={true} duration={500}>
          <button className="bg-black text-white px-6 py-3 font-semibold rounded-md mb-20">
          See plans
          </button>
        </ScrollLink>

        <div className="grid grid-cols-3 gap-10">
          <BenefitItem
            iconUrl={icons}
            title="Tablero de diseño"
            description="Agregue tantas solicitudes de diseño a su tablero como desee."
            
          />
          <BenefitItem
            iconUrl="https://placehold.co/100x100"
            title="Entrega ultrarrápida"
            description="Obtenga su diseño uno a la vez en tan solo unos días en promedio."
          />
          <BenefitItem
            iconUrl="https://placehold.co/100x100"
            title="Tarifa fija mensual"
            description="¡Aquí no hay sorpresas! Paga el mismo precio fijo cada mes."
          />
          <BenefitItem
            iconUrl="https://placehold.co/100x100"
            title="Calidad de primer nivel"
            description="Una increíble calidad de diseño a tu alcance cuando la necesites."
          />
          <BenefitItem
            iconUrl="https://placehold.co/100x100"
            title="Flexible y escalable"
            description="Aumente o reduzca según sea necesario y pausa o cancele en cualquier momento."
          />
          <BenefitItem
            iconUrl="https://placehold.co/100x100"
            title="Único y todo tuyo"
            description="Cada uno de tus diseños está hecho especialmente para ti y es 100% tuyo."
          />
        </div>
      </div>
    </div>
  );
};

interface BenefitItemProps {
  iconUrl: string;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ iconUrl, title, description }) => (
  <div>
    <img src={iconUrl} alt={`Icon representing ${title}`} className="mx-auto mb-4"/>
    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    <p>{description}</p>
  </div>
);

export default BenefitsSection;
