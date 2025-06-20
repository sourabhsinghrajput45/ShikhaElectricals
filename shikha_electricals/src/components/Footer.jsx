// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Shikha Electricals</h3>
          <p>Serving quality electrical products since 1990.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#categories" className="hover:underline">Categories</a></li>
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p>Email: support@shikhaelectricals.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
      <p className="text-center mt-8 text-sm">© 2025 Shikha Electricals. All rights reserved.</p>
    </footer>
  );
};

export default Footer;