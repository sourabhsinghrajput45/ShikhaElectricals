// src/pages/CategoryPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CategoryPage = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/products?category=${name.toLowerCase()}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setProducts([]);
        setLoading(false);
      });
  }, [name]);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6 text-center capitalize">Category: {name}</h1>
      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-center">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex flex-col"
            >
              {product.image && (
                <div className="w-full h-40 mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain"
                  />
                </div>
              )}
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
