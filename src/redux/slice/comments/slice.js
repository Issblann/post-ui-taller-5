import { createSlice } from '@reduxjs/toolkit';

import initialState from './state';
import reducers from './reducers';
const sliceComment = createSlice({
  name: 'comment',
  initialState,
  reducers,
});

export const actions = sliceComment.actions;

export default sliceComment.reducer;
