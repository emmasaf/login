import { createSlice } from '@reduxjs/toolkit';
import { checkRefreshToken, login } from '../../../entities/api/requests';
import { act } from 'react-dom/test-utils';

const initialState = {
  user: null,
  error: null,
  loading: false,
  token: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem('jwt_access_token', action.payload.access_token);
        localStorage.setItem('jwt_refresh_token', action.payload.refresh_token);

        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state) => {
        state.error = true;
        state.user = null;
        state.loading = false;
      })
      .addCase(checkRefreshToken.rejected, (state,action) => {
        console.log(action.payload,'rrr///////');
        state.token = action.payload;
      })
      .addCase(checkRefreshToken.fulfilled, (state,action) => {
        console.log(action.payload,'fff///////');
        state.token = action.payload;
      })
  },
});

export default loginSlice.reducer;
