import { createSlice } from '@reduxjs/toolkit'
import { checkAccessToken, login } from '../../../shared/api/requests'

const initialState = {
  user: null,
  error: null,
  loading: false,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
        state.error = null
      })
      .addCase(login.rejected, state => {
        state.error = true
        state.user = null
        state.loading = false
      })
      .addCase(checkAccessToken.rejected, (state, action) => {
        state.error = true
      })
      .addCase(checkAccessToken.fulfilled, (state, action) => {
        state.error = false
      })
  },
})

export default loginSlice.reducer
