import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from './slice/TodoSlice'

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})
