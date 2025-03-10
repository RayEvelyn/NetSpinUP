import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <p className="text-lg mt-2">Welcome to NetSpinUP</p>
      <nav className="mt-4 space-x-4">
        <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
        <Link to="/blog" className="text-blue-500 hover:underline">Blog</Link>
        <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
      </nav>
    </div>
  );
};

export default Home;
