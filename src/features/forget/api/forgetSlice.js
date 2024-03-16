import { createSlice } from '@reduxjs/toolkit'
import { resetPassword } from '../../../entities/api/requests';

const initialState = {
  data: null,
  loading:false,
  error:null
}

const forgetSlice = createSlice({
  name: 'forget',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error =null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null
      })
      .addCase(resetPassword.rejected, (state) => {
        state.error = true
        state.loading = false;
      });
  }
})


export default forgetSlice.reducer
