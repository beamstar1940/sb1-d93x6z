import React, { useState } from 'react';
import { User, Heart, Star, Settings } from 'lucide-react';

const UserProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2024',
    favoriteRestaurants: [
      { id: 1, name: 'Gourmet Delight', cuisine: 'Fine Dining' },
      { id: 2, name: 'Sushi Paradise', cuisine: 'Japanese' },
    ],
    reviews: [
      { id: 1, restaurantName: 'Gourmet Delight', rating: 5, comment: 'Excellent food and service!' },
      { id: 2, restaurantName: 'Veggie Haven', rating: 4, comment: 'Great vegetarian options.' },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <User size={48} className="text-indigo-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          
          <div className="flex border-b mb-6">
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'profile' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'favorites' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('favorites')}
            >
              Favorites
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'reviews' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'settings' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
          </div>
          
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Member Since:</strong> {user.joinDate}</p>
            </div>
          )}
          
          {activeTab === 'favorites' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Favorite Restaurants</h2>
              <ul className="space-y-4">
                {user.favoriteRestaurants.map(restaurant => (
                  <li key={restaurant.id} className="flex items-center">
                    <Heart className="text-red-500 mr-2" size={20} />
                    <div>
                      <h3 className="font-medium">{restaurant.name}</h3>
                      <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Reviews</h2>
              <ul className="space-y-4">
                {user.reviews.map(review => (
                  <li key={review.id} className="border-b pb-4">
                    <h3 className="font-medium">{review.restaurantName}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400" size={16} />
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" defaultValue={user.name} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" defaultValue={user.email} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
                  <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">Save Changes</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;