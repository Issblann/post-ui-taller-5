import { configureStore } from '@reduxjs/toolkit';
import postSlice from './slice/posts/slice';
export const store = configureStore({
  reducer: {
    post: postSlice,
  },
});
