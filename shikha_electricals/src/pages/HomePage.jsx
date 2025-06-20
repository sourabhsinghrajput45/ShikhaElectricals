import React from 'react';
import CategoryCard from '../components/CategoryCard';

const categories = ['Fans', 'Wires', 'Switches', 'Smart Accessories'];

const HomePage = () => {
  return (
    <div className="p-10 flex flex-wrap gap-8 justify-center">
      {categories.map((cat) => (
        <CategoryCard key={cat} category={cat} />
      ))}
    </div>
  );
};

export default HomePage;
