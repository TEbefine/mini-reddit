import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  subredditFeed: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "subreddit/loadSubredditFeed",
  async (args) => {
    const { subreddit, params } = args;
    const url = `https://www.reddit.com/r/${subreddit}/hot.json?` + params;
    const response = await fetch(url);
    if (!response.ok) {
      const error = await response.json();
      const message = `An error has occured: ${response.status} ${error.message}`;
      throw new Error(message);
    }
    const data = await response.json();
    return data;
  }
);

const miniRedditPostsSlice = createSlice({
  name: "redditPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        const data = action.payload;
        state.isLoading = false;
        state.isError = false;
        state.subredditFeed = data.data.children.map((child) => ({
          id: child.data.id,
          title: child.data.title,
          author: child.data.author, // Added author
          thumbnail: child.data.thumbnail, // Added thumbnail (might be empty)
          num_comments: child.data.num_comments, // Added number of comments
          ups: child.data.ups, // Added up votes
          created_utc: child.data.created_utc, // Added time of post (in Unix timestamp)
        }));
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const selectSubredditFeed = (state) => state.redditPosts.subredditFeed;
export const selectIsLoading = (state) => state.redditPosts.isLoading;
export const selectIsError = (state) => state.redditPosts.isError;
export const selectError = (state) => state.redditPosts.error;

export default miniRedditPostsSlice.reducer;
