import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  status: 'idle',
}

export const createAPISlice = (name, action) => createSlice({
  name: name,
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(action.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(action.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload
      })
      .addCase(action.rejected, (state, action) => {
        state.status = 'failed';
      })
  },
})
