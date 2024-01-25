import React, { FC } from 'react';
import Item from '../Item/Item';
import './ApplicationSection.css';

const ApplicationsSection: FC = () => {
  return (
    <div id="scope-of-work" className="bg-[#FFF0EB] min-h-screen flex items-center justify-center p-10">
      <div>
        <h1 className="text-6xl font-bold mb-10">Apps, websites, logos and more.</h1>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <Item text="Websites" />
            <Item text="Mobile apps" />
            <Item text="Logos and brands" />
            <Item text="Design systems" />
            <Item text="SAAS" />
            <Item text="Wireframes" />
            <Item text="Stationery" />
            <Item text="Presentation platforms" />
          </div>
          <div>
            <Item text="Slide Decks" />
            <Item text="Slide Decks" />
            <Item text="Infographics" />
            <Item text="Brochures" />
            <Item text="Signaling" />
            <Item text="brand guides" />
            <Item text="social media graphics" />
            <Item text="billboards" />
          </div>
          <div>
            <Item text="banners for trade shows" />
            <Item text="email graphics" />
            <Item text="CV" />
            <Item text="business letters" />
            <Item text="packaging" />
            <Item text="blog graphics" />
            <Item text="Digital ads" />
            <Item text="Icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsSection;