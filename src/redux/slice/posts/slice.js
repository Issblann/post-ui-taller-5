import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import reducers from './reducers';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ start, limit }) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
    );
    return response.data;
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
        if (action.payload.length > 0) {
          state.posts = [...state.posts, ...action.payload]; // Agregar los nuevos posts a los existentes
        } else {
          state.tieneMas = false;
        }
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
