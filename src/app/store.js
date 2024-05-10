import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import miniRedditPostsReducer from "../features/miniPosts/miniRedditPostsSlice";
import miniCommentReducer from "../features/miniComments/miniCommentsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    redditPosts: miniRedditPostsReducer,
    commentPosts: miniCommentReducer,
  },
});
