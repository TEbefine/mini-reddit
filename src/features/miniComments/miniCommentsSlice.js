import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  commentFeed: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (id) => {
    const url = `https://www.reddit.com/comments/${id}.json`; // Construct comment URL
    const response = await fetch(url);
    if (!response.ok) {
      const error = await response.json();
      const message = `An error has occured: ${response.status} ${error.message}`;
      throw new Error(message);
    }

    const data = await response.json();
    // Extract comments and usernames
    const comments = data[1].data.children.map((child) => ({
      body: child.data.body,
      author: child.data.author,
    }));

    return { comments };
  }
);

const miniCommentSlice = createSlice({
  name: "commentPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.commentFeed = action.payload.comments;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const selectComments = (state) => state.commentPosts.commentFeed;

export default miniCommentSlice.reducer;
