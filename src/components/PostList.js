import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (status === 'loading') {
      toast.info('Loading posts...');
    } else if (status === 'failed') {
      toast.error(`Failed to load posts: ${error}`);
    }
  }, [status, error]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id} className="border p-4 rounded shadow hover:bg-gray-100 transition">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={page === 0}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;
