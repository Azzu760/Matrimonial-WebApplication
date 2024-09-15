import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <FaExclamationTriangle className="text-pink-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold text-pink-500">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        The page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default NotFound;
