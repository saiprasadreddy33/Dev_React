import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/postSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PostForm = ({ onPostCreated }) => { // Accept the callback as a prop
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title) {
      toast.error('Title is required');
      return;
    }
    if (description.length > 1000) {
      toast.error('Description should not exceed 1000 characters');
      return;
    }

    try {
      await dispatch(createPost({ title, body: description }));
      toast.success('Post created successfully');
      onPostCreated(); // Call the callback to refetch posts
      navigate('/posts');
    } catch (error) {
      toast.error('Failed to create post');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength="1000"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
          <p className="text-sm text-gray-500 mt-1">Max 1000 characters</p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
