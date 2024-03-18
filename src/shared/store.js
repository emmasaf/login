import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login/api/loginSlice';
import forgetReducer from '../features/forget/api/forgetSlice';
import setNewReducer from '../features/new/api/newSlice';
import notificationReducer from '../features/notifications/api/notificationSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    forget: forgetReducer,
    new: setNewReducer,
    notification:notificationReducer
  },
});
