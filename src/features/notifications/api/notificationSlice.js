import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const triggerNotification = createAsyncThunk(
  'notification/trigger',
  async ({ message, type }, { dispatch }) => {
    dispatch(setNotification({ message, type }))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000) // Adjust time as needed
  },
)

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    message: null,
    type: null,
  },
  reducers: {
    setNotification: (state, action) => {
      state.message = action.payload.message
      state.type = action.payload.type
    },
    clearNotification: state => {
      state.message = null
      state.type = null
    },
  },
})

export const { setNotification, clearNotification } = notificationSlice.actions
export const selectNotification = state => state.notifications

export default notificationSlice.reducer
