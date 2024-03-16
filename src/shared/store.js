import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/api/loginSlice';
import forgetReducer from '../features/forget/api/forgetSlice';
import setNewReducer from '../features/new/api/newSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    reset: forgetReducer,
    setNew: setNewReducer,
  },
});
