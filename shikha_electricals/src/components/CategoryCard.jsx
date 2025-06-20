import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${category}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all w-60 text-center"
    >
      <h2 className="text-lg font-semibold text-blue-700">{category}</h2>
    </div>
  );
};

export default CategoryCard;