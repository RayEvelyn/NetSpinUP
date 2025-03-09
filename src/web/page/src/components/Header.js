import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">NetSpinUP</h1>
        <div>
          <Link to="/" className="mx-2 hover:underline">Home</Link>
          <Link to="/contact" className="mx-2 hover:underline">Contact</Link>
          <Link to="/blog" className="mx-2 hover:underline">Blog</Link>
          <Link to="/signup" className="mx-2 hover:underline">Sign Up</Link>
          <Link to="/login" className="mx-2 hover:underline">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;