export default {
  loadMore: (state) => {
    state.limit += state.limit;
  },
};
