import { configureStore } from '@reduxjs/toolkit'
import spaceReducer from '../redux/slices/spaceSlice'

export const store = configureStore({
  reducer: {
   spaces:spaceReducer

  },
})