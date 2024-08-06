import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import CartPage from './pages/CartPage';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import CreatePostPage from './pages/CreatePostPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      {!isHomePage && <Navbar />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
