import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">FoodFinder</h3>
            <p className="text-gray-400">Discover the best restaurants in your area.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/search" className="hover:text-white">Search</a></li>
              <li><a href="/profile" className="hover:text-white">Profile</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-gray-400">Email: info@foodfinder.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 FoodFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;