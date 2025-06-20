// src/components/PlumbingCategoryGrid.jsx
import React from 'react';

const plumbingCategories = [
  { name: 'Pipes', icon: '🛠️' },
  { name: 'Faucets', icon: '🚰' },
  { name: 'Valves', icon: '🔧' },
  { name: 'Taps', icon: '🚿' },
  { name: 'Connectors', icon: '🔩' },
  { name: 'Seals & Gaskets', icon: '🧰' },
];

const PlumbingCategoryGrid = () => {
  return (
    <section id="plumbing-categories" className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-10">Plumbing Accessories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {plumbingCategories.map((cat) => (
          <div key={cat.name} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition">
            <span className="text-4xl mb-2">{cat.icon}</span>
            <p className="font-medium text-center">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlumbingCategoryGrid;
