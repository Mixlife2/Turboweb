import React from 'react';
import Item from '../Item/Item';
import './ApplicationSection.css'

const ApplicationsSection = () => {
  return (
    <div id="scope-of-work" className="bg-[#FFF0EB] min-h-screen flex items-center justify-center p-10">
      <div>
        <h1 className="text-6xl font-bold mb-10">Aplicaciones, sitios web, logotipos y más.</h1>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <Item text="Sitios web" />
            <Item text="Aplicaciones móviles" />
            <Item text="Logotipos y marcas" />
            <Item text="Sistemas de diseño" />
            <Item text="SAAS" />
            <Item text="Estructuras alámbricas" />
            <Item text="Papelería" />
            <Item text="Plataformas de presentación" />
          </div>
          <div>
            <Item text="Plataformas de diapositivas" />
            <Item text="Correo directo" />
            <Item text="Infografías" />
            <Item text="Folletos" />
            <Item text="Señalización" />
            <Item text="guías de marca" />
            <Item text="gráficos de redes sociales" />
            <Item text="vallas publicitarias" />
          </div>
          <div>
            <Item text="pancartas para ferias comerciales" />
            <Item text="gráficos de correo electrónico" />
            <Item text="CV" />
            <Item text="Cartas de negocios" />
            <Item text="embalaje" />
            <Item text="gráficos de blogs" />
            <Item text="Anuncios digitales" />
            <Item text="Iconos" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsSection;
