import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import reducers from './reducers';
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers,
});

export const actions = postSlice.actions;
export default postSlice.reducer;
