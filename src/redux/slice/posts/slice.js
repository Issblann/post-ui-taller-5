import initialState from './state';
import reducers from './reducers';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ start, limit }) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
      );

      return response.data;
    } catch (error) {
      return error;
    }
  }
);
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = [...action.payload];
        state.limit = state.limit + 15;
        state.status = 'succeeded';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const actions = postSlice.actions;
export default postSlice.reducer;
