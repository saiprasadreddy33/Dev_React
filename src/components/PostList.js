import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Login.css';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const loadPosts = async () => {
      await dispatch(fetchPosts(page));
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2 seconds delay
    };

    loadPosts();
  }, [dispatch, page]);

  useEffect(() => {
    if (status === 'loading') {
      toast.info('Loading posts...');
    } else if (status === 'failed') {
      toast.error(`Failed to load posts: ${error}`);
    }
  }, [status, error]);

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 animate-pulse">
                <div className="h-6 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))
        ) : (
          posts.map((post) => (
            <Link
              to={`/posts/${post.id}`}
              key={post.id}
              className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                {post.isNew && (
                  <span className="absolute top-2 right-2 bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Newly Added
                  </span>
                )}
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.body}</p>
              </div>
            </Link>
          ))
        )}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300 ml-4"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
