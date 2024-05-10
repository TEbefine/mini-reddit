import { configureStore } from "@reduxjs/toolkit";
import miniRedditPostsReducer from "../features/miniPosts/miniRedditPostsSlice";
import miniCommentReducer from "../features/miniComments/miniCommentsSlice";

export const store = configureStore({
  reducer: {
    redditPosts: miniRedditPostsReducer,
    commentPosts: miniCommentReducer,
  },
});
