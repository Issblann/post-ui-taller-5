export default {
  setComment: (state, action) => {
    const { postId, visibility } = action.payload;
    state.showComment[postId] = visibility;
  },
  setGetComment: (state, action) => {
    state.getComments = action.payload;
  },
};
