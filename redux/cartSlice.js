// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
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
