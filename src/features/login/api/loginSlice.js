import { createSlice } from '@reduxjs/toolkit';
import { login } from '../../../entities/api/requests';

const initialState = {
  user: null,
  error: null,
  loading: false,
  token:''
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error =null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error =null;
      })
      .addCase(login.rejected, (state) => {
        state.error = true
        state.loading = false;
      });
  }
});

export default loginSlice.reducer;
