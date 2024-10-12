import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          FoodFinder
        </Link>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/search" className="flex items-center text-gray-600 hover:text-indigo-600">
                <Search size={20} className="mr-1" />
                Search
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center text-gray-600 hover:text-indigo-600">
                <User size={20} className="mr-1" />
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;