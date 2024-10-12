import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Discover Amazing Restaurants Near You</h1>
      <p className="text-xl mb-8">Find the perfect dining experience based on your preferences</p>
      
      <div className="mb-12">
        <Link to="/search" className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300">
          Start Exploring
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Search size={48} className="mx-auto mb-4 text-indigo-600" />
          <h3 className="text-xl font-semibold mb-2">Advanced Search</h3>
          <p>Filter by cuisine, price range, and dietary restrictions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Star size={48} className="mx-auto mb-4 text-indigo-600" />
          <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
          <p>Get suggestions based on your preferences and past visits</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <MapPin size={48} className="mx-auto mb-4 text-indigo-600" />
          <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
          <p>Easily find and navigate to restaurants near you</p>
        </div>
      </div>
      
      <div className="bg-gray-200 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Featured Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Replace with actual data and images */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Restaurant 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Gourmet Delight</h3>
              <p className="text-gray-600">Fine dining experience</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Restaurant 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Sushi Paradise</h3>
              <p className="text-gray-600">Authentic Japanese cuisine</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Restaurant 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">Veggie Haven</h3>
              <p className="text-gray-600">Delicious vegetarian options</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;