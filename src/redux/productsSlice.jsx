import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    { id: 1, name: 'Product 1', image: '/assets/product1.png' },
    { id: 2, name: 'Product 2', image: '/assets/product2.png' },
    { id: 3, name: 'Product 3', image: '/assets/product3.png' },
  ],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload);
    },
    updateProduct: (state, action) => {
      const { id, name } = action.payload;
      const product = state.find(p => p.id === id);
      if (product) product.name = name;
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
