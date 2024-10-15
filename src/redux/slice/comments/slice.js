import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import initialState from './state';
import reducers from './reducers';
import axios from 'axios';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async ({ postId }) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    return response.data;
  }
);

const sliceComment = createSlice({
  name: 'comment',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const actions = sliceComment.actions;

export default sliceComment.reducer;
