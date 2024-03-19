import { createSlice } from '@reduxjs/toolkit'
import { checkRefreshToken, login } from '../../../shared/api/requests'

const initialState = {
  user: null,
  error: null,
  loading: false,
  token: '',
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
      .addCase(checkRefreshToken.rejected, (state, action) => {
        state.token = action.payload
      })
      .addCase(checkRefreshToken.fulfilled, (state, action) => {
        state.token = action.payload
      })
  },
})

export default loginSlice.reducer
