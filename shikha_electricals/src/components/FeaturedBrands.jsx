// src/components/FeaturedBrands.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import vinayLogo from '../assets/brands/vinay.jpg';
import texmoLogo from '../assets/brands/texmo.png';
import vguardLogo from '../assets/brands/vguard.png';
import phillipslogo from '../assets/brands/phillips.png';
import havellsLogo from '../assets/brands/havells.png';
import ashirvadLogo from '../assets/brands/ashirvad.png';
import plumberLogo from '../assets/brands/plumber.png';
import millonLogo from '../assets/brands/million.png';
import microtekLogo from '../assets/brands/microtek.png';
import sujataLogo from '../assets/brands/sujata.png';
import symphonyLogo from '../assets/brands/symphony.png';
import lkLogo from '../assets/brands/lk.png';
import bajajLogo from '../assets/brands/bajaj.png';
import cromptonLogo from '../assets/brands/crompton.png';
import pearlLogo from '../assets/brands/pearl.png';
import listerlLogo from '../assets/brands/lister.jpg';
import ahujaLogo from '../assets/brands/ahuja.png';
import elisaLogo from '../assets/brands/elisa.png';
import celloLogo from '../assets/brands/cello.png';
import rajLogo from '../assets/brands/raj.png';

const brands = [
  { name: 'Vinay', logo: vinayLogo },
  { name: 'Havells', logo: havellsLogo },
  { name: 'Ashirvad', logo: ashirvadLogo },
  { name: 'Plumber', logo: plumberLogo },
  { name: 'Millon ', logo: millonLogo },
  { name: 'Sujata', logo: sujataLogo },
  { name: 'V-guard', logo: vguardLogo },
  { name: 'MicroTek', logo: microtekLogo },
  { name: 'Symphony', logo: symphonyLogo },
  { name: 'LauritzKnudsen', logo: lkLogo },
  { name: 'Bajaj', logo: bajajLogo },
  { name: 'Crompton', logo: cromptonLogo },
  { name: 'Lister', logo: listerlLogo },
  { name: 'Phillips', logo: phillipslogo },
  { name: 'Ahuja', logo: ahujaLogo },
  { name: 'Elisa', logo: elisaLogo },
  { name: 'Cello', logo: celloLogo },
  { name: 'Pearl', logo: pearlLogo },
  { name: 'Raj Water Tanks', logo: rajLogo },
  { name: 'Texmo', logo: texmoLogo }
];

const FeaturedBrands = () => {
  const navigate = useNavigate();

  const handleBrandClick = (brandName) => {
    navigate(`/brand/${encodeURIComponent(brandName)}`);
  };

  const topBrands = brands.slice(0, 3);
  const otherBrands = brands.slice(3);

  return (
    <section id="brands" className="py-16 px-6 bg-gradient-to-br from-blue-50 to-white">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Featured Brands</h2>

      {/* Top 3 Large Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
        {topBrands.map(({ name, logo }, index) => (
          <div
            key={index}
            onClick={() => handleBrandClick(name)}
            className="cursor-pointer bg-white border border-gray-300 shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-full h-32 flex items-center justify-center mb-4 p-2 rounded-lg">
              <img
                src={logo}
                alt={name}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150x80?text=Brand';
                }}
              />
            </div>
            <p className="text-xl font-bold text-gray-900 text-center">{name}</p>
          </div>
        ))}
      </div>

      {/* Remaining Smaller Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {otherBrands.map(({ name, logo }, index) => (
          <div
            key={index}
            onClick={() => handleBrandClick(name)}
            className="cursor-pointer bg-white border border-gray-300 shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="w-full h-32 flex items-center justify-center mb-4 p-2 rounded-lg">
              <img
                src={logo}
                alt={name}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150x80?text=Brand';
                }}
              />
            </div>
            <p className="text-md font-semibold text-gray-800 text-center">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrands;
