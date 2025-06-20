// src/components/CategoryGrid.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Fans', icon: '🌀' },
  { name: 'Lights', icon: '💡' },
  { name: 'Switches', icon: '🔌' },
  { name: 'Appliances', icon: '📺' },
  { name: 'Cables', icon: '🧵' },
  { name: 'Accessories', icon: '⚙️' },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    // Navigate to CategoryPage with category name in URL
    navigate(`/category/${categoryName.toLowerCase()}`);
  };

  return (
    <section id="categories" className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-10">Electricals And Electronics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map(({ name, icon }) => (
          <div
            key={name}
            onClick={() => handleCategoryClick(name)}
            className="cursor-pointer bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition"
          >
            <span className="text-4xl mb-2">{icon}</span>
            <p className="font-medium text-center">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
