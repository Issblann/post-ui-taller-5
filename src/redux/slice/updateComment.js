import { createSlice } from "@reduxjs/toolkit";

const sliceComment = createSlice({
    name: 'comment',
    initialState: {
        showComment: false,
        getComments: [],
    },
    reducers: {
        setComment(state, action) {
            state.showComment = action.payload
        },
        setGetComment(state, action) {
            state.getComments = action.payload
        }
    }
})

export const { setComment, setGetComment } = sliceComment.actions

export default sliceComment.reducer