import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

const newSlice = createSlice({
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


export const { increment, decrement, incrementByAmount } = newSlice.actions
export default newSlice.reducer
