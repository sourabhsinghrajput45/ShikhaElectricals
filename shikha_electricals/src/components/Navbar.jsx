// src/components/Navbar.jsx
import React from 'react';
import CategoryDropdown from './CategoryDropdown';
import BradsDropdown from './BrandsDropdown';
import SearchBar from './SearchBar';

const Navbar = () => {
      const handleGlobalSearch = (query) => {
    console.log("Search query:", query);
    // TODO: Integrate with global search logic, or redirect to /search?q=query
  };
  return (
    <nav className=" flex justify-between items-center w-full px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-red-600 tracking-normal leading-tight font-sans hover:brightness-110 transition duration-300 ease-in-out">
        Shikha <span className="text-gray-800">Electricals</span>
        </div>
        <SearchBar onSearch={handleGlobalSearch} />
        
      <ul className="flex gap-6 font-medium text-gray-700">


        <div className="flex items-center gap-4">
        <CategoryDropdown />
        </div>
        <div className="flex items-center gap-4">
        <BradsDropdown />
        </div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li><a href="#home" className="hover:text-red-500">Home</a></li>
        <li><a href="#categories" className="hover:text-red-500">Categories</a></li>
        <li><a href="#brands" className="hover:text-red-500">Brands</a></li>
        <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
