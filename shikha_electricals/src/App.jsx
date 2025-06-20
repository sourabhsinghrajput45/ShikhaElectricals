// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedBrand from './components/FeaturedBrands';
import Footer from './components/Footer';
import PlumbingCategoryGrid from './components/PlumbingCategoryGrid';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CategoryGrid />
              <PlumbingCategoryGrid />
              <FeaturedBrand />
              <Footer />
            </>
          }
        />
        <Route path="/category/:name" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
