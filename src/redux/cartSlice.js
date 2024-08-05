import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Product A', price: 50, quantity: 1 },
    { id: 2, name: 'Product B', price: 30, quantity: 1 },
  ],
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
  },
});

export const { updateQuantity, applyDiscount } = cartSlice.actions;
export default cartSlice.reducer;
