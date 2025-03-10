import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold">Contact Page</h1>
      <form className="mt-4">
        <label className="block">Name:</label>
        <input type="text" name="name" required className="w-full p-2 border rounded-md" />
        <label className="block mt-2">Email:</label>
        <input type="email" name="email" required className="w-full p-2 border rounded-md" />
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
