// src/layouts/MainLayout.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import PlumbingCategoryGrid from '../components/PlumbingCategoryGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryGrid />
      <PlumbingCategoryGrid />
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default MainLayout;
