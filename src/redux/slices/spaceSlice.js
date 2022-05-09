import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const fetchSpace = createAsyncThunk(
    'space/fetchSpace',
    async () => {
      const response = await fetch('https://api.spacexdata.com/v3/launches').then(res=> res.json())
      return response
    }
  )

const initialState = {
  data:[]
}

export const spaceSlice = createSlice({
  name: 'space',
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
    builder.addCase(fetchSpace.fulfilled, (state, action) => {
      state.data=action.payload;
      state.status = 'success'
    })
    builder.addCase(fetchSpace.pending, (state, action) => {
        state.status = 'pending';
    })
},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = spaceSlice.actions

export default spaceSlice.reducer