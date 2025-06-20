// src/components/CategoryGrid.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import category images
import fanImg from '../assets/categories/fan.png';
import lightImg from '../assets/categories/light.png';
import switchImg from '../assets/categories/switch.webp';
import appliancesImg from '../assets/categories/appliances.jpg';
import coolerImg from '../assets/categories/cooler.png';
import accessoriesImg from '../assets/categories/accessories.png';

const categories = [
  { name: 'Fans', image: fanImg },
  { name: 'Lights', image: lightImg },
    { name: 'Switches', image: switchImg },
    { name: 'Appliances', image: appliancesImg },
    { name: 'Coolers', image: coolerImg },
    { name: 'Accessories', image: accessoriesImg },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  return (
    <section id="categories" className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Electricals And Electronics
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name)}
            className="cursor-pointer bg-white shadow-md rounded-xl overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="h-28 p-5 w-full ">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-3 text-center">
              <p className="font-semibold text-gray-700">{cat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
