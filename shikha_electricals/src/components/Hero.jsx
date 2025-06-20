// src/components/Hero.jsx
import React from 'react';
import banner from '../assets/hero.jpg'; // use your banner image
const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] w-full">
      <img src={banner} alt="Hero" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to{' '}
            <span className="text-red-600 font-bold tracking-normal leading-tight font-sans text-4xl md:text-6xl text-gray-800">
                <span className="text-red-600">Shikha</span>{' '}
                <span className="text-gray-800">Electricals</span>
            </span>
            </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">Your one-stop destination for premium electrical appliances and solutions.</p>
        <a href="#categories" className="bg-red-600 px-6 py-3 rounded-full text-white hover:bg-red-700 transition">Explore Categories</a>
      </div>
    </section>
  );
};

export default Hero;