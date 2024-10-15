import { configureStore } from "@reduxjs/toolkit";
import sliceComment from './slice/updateComment.js'

const store = configureStore({
    reducer: {
        comment: sliceComment
    }
})

export default store