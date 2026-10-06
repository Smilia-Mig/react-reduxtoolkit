import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { loggerMiddleware } from './loggerMiddleware.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware), 
});