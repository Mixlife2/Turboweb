import React from 'react';

const categories = [
  { id: 'websites', name: 'Websites' },
  { id: 'mobileApps', name: 'Mobile Apps' },
  { id: 'logosBranding', name: 'Logos & Branding' },
  { id: 'designSystems', name: 'Design Systems' },
  { id: 'saas', name: 'SAAS' },
  { id: 'wireframes', name: 'Wireframes' },
  { id: 'stationery', name: 'Stationery' },
  { id: 'pitchDecks', name: 'Pitch Decks' },
  { id: 'slideDecks', name: 'Slide Decks' },
  { id: 'directMail', name: 'Direct Mail' },
  { id: 'infographics', name: 'Infographics' },
  { id: 'brochures', name: 'Brochures' },
  { id: 'signage', name: 'Signage' },
  { id: 'brandGuides', name: 'Brand Guides' },
  { id: 'socialMediaGraphics', name: 'Social Media Graphics' },
  { id: 'billboards', name: 'Billboards' },
  { id: 'tradeShowBanners', name: 'Trade Show Banners' },
  { id: 'emailGraphics', name: 'Email Graphics' },
  { id: 'resumes', name: 'Resumes' },
  { id: 'businessCards', name: 'Business Cards' },
  { id: 'packaging', name: 'Packaging' },
  { id: 'blogGraphics', name: 'Blog Graphics' },
  { id: 'digitalAds', name: 'Digital Ads' },
  { id: 'icons', name: 'Icons' },
];

function DesignOptions() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Selecciona una categoría de diseño:</h2>
      <ul className="list-none p-0">
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            <a href={`#${category.id}`} className="text-blue-500 hover:underline">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesignOptions;
