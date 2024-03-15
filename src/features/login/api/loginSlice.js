import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    },
    incrementByAmount(state, action) {
      state.count += action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = loginSlice.actions
export default loginSlice.reducer
