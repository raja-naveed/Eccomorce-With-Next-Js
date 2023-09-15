// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/redux/cartSlice'; // Update the path to your cartSlice.js

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add more reducers if needed
  },
});

export default store;
