import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (page) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${page * 10}&_limit=10`);
  return response.data;
});

export const createPost = createAsyncThunk('posts/createPost', async (post) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
  return response.data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.posts = payload;
        state.status = 'success';
      })
      .addCase(fetchPosts.rejected, (state, { error }) => {
        state.status = 'failed';
        state.error = error.message;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        state.posts.unshift(payload); // Add new post at the beginning
      });
  },
});

export default postSlice.reducer;
