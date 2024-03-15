import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

const forgetSlice = createSlice({
  name: 'forget',
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


export const { increment, decrement, incrementByAmount } = forgetSlice.actions
export default forgetSlice.reducer
