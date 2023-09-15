// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const productToAdd = action.payload;
      const existingProduct = state.find((item) => item.id === productToAdd.id);
    
      if (existingProduct) {
        // Product with the same ID exists in the cart, increment its quantity
        existingProduct.quantity += 1;
      } else {
        // Product doesn't exist in the cart, add it with a quantity of 1
        state.push(productToAdd);
      }
    },
    
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    increment(state, action) {
      const product = state.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrement(state, action) {
      const product = state.find((item) => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    deleteItem(state, action) {
        return state.filter((item) => item.id !== action.payload);
      },
  },
});

export const { add, remove, increment, decrement,deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
export const selectTotalQuantity = (state) => {
  return state.cart.reduce((total, product) => total + product.quantity, 0);
};

