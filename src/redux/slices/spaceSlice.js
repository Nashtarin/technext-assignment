import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const fetchBooks = createAsyncThunk(
    'book/fetchBooks',
    async () => {
      const response = await fetch('https://api.spacexdata.com/v3/launches').then(res=> res.json())
      return response.data
    }
  )

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.discover = action.payload;
      state.status = 'success'
    })
    builder.addCase(fetchBooks.pending, (state, action) => {
        state.status = 'pending';
    })
},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer