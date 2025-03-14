import React, { useState } from 'react';
import { login } from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(email, password);
    if (response.token) {
      alert('Login successful!');
    } else {
      alert(response.message || 'Login failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold">Login</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <label className="block">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border rounded-md" />
        <label className="block mt-2">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 border rounded-md" />
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;
