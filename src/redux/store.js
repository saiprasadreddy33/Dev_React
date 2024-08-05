import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    cart: cartReducer,
  },
});
