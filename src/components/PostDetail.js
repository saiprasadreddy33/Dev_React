import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(response.data);
        setError(null);
      } catch (error) {
        setError('Failed to fetch post');
        toast.error('Failed to fetch post');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="spinner">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );

  if (error) return <div className="text-center text-red-500 text-xl">{error}</div>;

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="container bg-white rounded-lg shadow-lg p-6 max-w-2xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center text-blue-500 hover:text-blue-700 transition duration-300"
          aria-label="Go back"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>

        <div className="animate-fadeIn">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-lg text-gray-700">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;