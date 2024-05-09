import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import miniRedditPostsReducer from "../features/miniPosts/miniRedditPostsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    redditPosts: miniRedditPostsReducer,
  },
});
