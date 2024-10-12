import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', { searchTerm, cuisine, priceRange, dietaryRestrictions });
  };

  const handleDietaryRestrictionChange = (restriction: string) => {
    setDietaryRestrictions(prev =>
      prev.includes(restriction)
        ? prev.filter(r => r !== restriction)
        : [...prev, restriction]
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Find Your Perfect Restaurant</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-r-lg hover:bg-indigo-700 transition duration-300">
            <Search size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <select
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Cuisines</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
            <option value="mexican">Mexican</option>
            <option value="indian">Indian</option>
          </select>
          
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Price Ranges</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
          </select>
          
          <div className="flex items-center">
            <Filter size={20} className="mr-2 text-gray-600" />
            <span className="mr-2">Dietary Restrictions:</span>
            {['Vegetarian', 'Vegan', 'Gluten-Free'].map(restriction => (
              <label key={restriction} className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  checked={dietaryRestrictions.includes(restriction)}
                  onChange={() => handleDietaryRestrictionChange(restriction)}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-sm">{restriction}</span>
              </label>
            ))}
          </div>
        </div>
      </form>
      
      {/* Placeholder for search results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Replace with actual search results */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Restaurant" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">Sample Restaurant</h3>
            <p className="text-gray-600 mb-2">Cuisine Type • $$</p>
            <p className="text-sm text-gray-500">123 Main St, City, State</p>
          </div>
        </div>
        {/* Add more placeholder results as needed */}
      </div>
    </div>
  );
};

export default SearchPage;