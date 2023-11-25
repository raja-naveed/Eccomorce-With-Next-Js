// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/redux/cartSlice'; 
import visitorSlice from './dataSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    visitor: visitorSlice,
  },
});

export default store;
