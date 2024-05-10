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
    // Filter posts with non-empty thumbnails
    const postsWithPictures = data.data.children.filter(
      (child) =>
        child.data.thumbnail &&
        child.data.thumbnail.trim() !== "" &&
        !(
          child.data.thumbnail.trim() === "self" ||
          child.data.thumbnail.trim() === "default"
        )
    );

    return postsWithPictures.map((child) => ({
      id: child.data.id,
      title: child.data.title,
      author: child.data.author,
      thumbnail: child.data.thumbnail,
      num_comments: child.data.num_comments,
      ups: child.data.ups,
      created_utc: child.data.created_utc,
    }));
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
        state.isLoading = false;
        state.isError = false;
        state.subredditFeed = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const selectSubredditFeed = (state) => state.redditPosts.subredditFeed;
export const selectPostsSlice = (state) => state.redditPosts;

export default miniRedditPostsSlice.reducer;
