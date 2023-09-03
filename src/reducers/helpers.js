/* eslint no-param-reassign: 0 */
import { createSlice } from '@reduxjs/toolkit';
import {
  FAILED, IDLE, LOADING, SUCCEEDED,
} from '@/constants';

const initialState = {
  data: null,
  status: IDLE,
};

export const createAPISlice = (name, apiAction) => createSlice({
  name,
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(apiAction.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(apiAction.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.data = action.payload;
      })
      .addCase(apiAction.rejected, (state) => {
        state.status = FAILED;
      });
  },
});
