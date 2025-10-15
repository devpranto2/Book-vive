import React from 'react';
import { useRouteError, Link } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full transform transition-all hover:scale-105">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          Oops! Page not found.
        </h2>
        <p className="text-gray-500 mt-2 mb-6">
          {error?.statusText || error?.message || "The page you’re looking for doesn’t exist."}
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-md hover:opacity-90 transition"
        >
          Go Back Home
        </Link>
      </div>

      <div className="absolute bottom-6 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} — All rights reserved.
      </div>
    </div>
    );
};

export default ErrorPage;