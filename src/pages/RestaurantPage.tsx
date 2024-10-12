import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Phone, Clock, DollarSign } from 'lucide-react';

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, you would fetch the restaurant data based on the ID
  const restaurant = {
    name: 'Sample Restaurant',
    cuisine: 'Italian',
    rating: 4.5,
    address: '123 Main St, City, State',
    phone: '(123) 456-7890',
    hours: 'Mon-Sat: 11am-10pm, Sun: 12pm-9pm',
    priceRange: '$$',
    description: 'A cozy Italian restaurant offering authentic dishes in a warm atmosphere.',
    menu: [
      { name: 'Margherita Pizza', price: 12.99 },
      { name: 'Spaghetti Carbonara', price: 15.99 },
      { name: 'Tiramisu', price: 7.99 },
    ],
    reviews: [
      { author: 'John D.', rating: 5, comment: 'Excellent food and service!' },
      { author: 'Sarah M.', rating: 4, comment: 'Great atmosphere, slightly pricey.' },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt={restaurant.name} className="w-full h-64 object-cover rounded-lg shadow-md" />
      </div>
      
      <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
      
      <div className="flex items-center mb-4">
        <Star className="text-yellow-400 mr-1" size={20} />
        <span className="font-semibold mr-2">{restaurant.rating}</span>
        <span className="text-gray-600 mr-4">{restaurant.cuisine}</span>
        <DollarSign className="text-gray-600 mr-1" size={20} />
        <span>{restaurant.priceRange}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Information</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <MapPin className="text-gray-600 mr-2" size={20} />
              {restaurant.address}
            </li>
            <li className="flex items-center">
              <Phone className="text-gray-600 mr-2" size={20} />
              {restaurant.phone}
            </li>
            <li className="flex items-center">
              <Clock className="text-gray-600 mr-2" size={20} />
              {restaurant.hours}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{restaurant.description}</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Menu Highlights</h2>
        <ul className="space-y-2">
          {restaurant.menu.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{item.name}</span>
              <span className="font-semibold">${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        {restaurant.reviews.map((review, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">{review.author}</span>
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400" size={16} />
                ))}
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;