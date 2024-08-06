import { createSlice } from '@reduxjs/toolkit';
import { mockProducts } from '../utils/mockData';

const initialState = {
  products: mockProducts,
  discount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((product) => product.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
    applyDiscount: (state, action) => {
      state.discount = action.payload;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    loadSavedCart: (state, action) => {
      state.products = action.payload.products;
      state.discount = action.payload.discount;
    },
    addProduct: (state, action) => {
      const { name, price, quantity } = action.payload;
      const newProduct = {
        id: state.products.length + 1, // Simple ID generation
        name,
        price,
        quantity,
      };
      state.products.push(newProduct);
    },
  },
});

export const { updateQuantity, applyDiscount, removeProduct, loadSavedCart, addProduct } = cartSlice.actions;

export default cartSlice.reducer;
