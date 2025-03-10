import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Blog</h1>
      <p className="mt-2">Latest posts will appear here.</p>
      <Link to="/blog/article" className="text-blue-500 hover:underline">Read an Article</Link>
    </div>
  );
};

export default Blog;
