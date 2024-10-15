export default {
  setComment: (state, action) => {
    state.showComment = action.payload;
  },
  setGetComment: (state, action) => {
    state.getComments = action.payload;
  },
};
