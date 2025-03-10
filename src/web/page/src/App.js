import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import { Provider } from 'react-redux';
import store from './store/authSlice';
import './tailwind.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/article" element={<BlogArticle />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;