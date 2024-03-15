import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../features/login/api/loginSlice';

export const store = configureStore({
  reducer: {
   login:loginSlice
  },
});
