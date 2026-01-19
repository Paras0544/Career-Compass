import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="max-w-md text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle size={100} className="text-red-500" />
        </div>
        <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
        <p className="mb-6 text-xl text-gray-600">
          Oops! The page you're looking for seems to have wandered off.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;