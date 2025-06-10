import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="text-center p-10">
    <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
    <p className="text-gray-600 mb-4">Oops! Page not found.</p>
    <Link to="/" className="text-indigo-600 font-semibold hover:underline">
      Go back to homepage
    </Link>
  </div>
);

export default NotFound;
