import { createSlice } from '@reduxjs/toolkit';
import { setNewPassword } from '../../../entities/api/requests';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const newSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setNewPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setNewPassword.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(setNewPassword.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default newSlice.reducer;
