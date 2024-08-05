import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import CartPage from './pages/CartPage';
import PostDetail from './components/PostDetail';
import Login from './components/Login';
import CreatePostPage from './pages/CreatePostPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
