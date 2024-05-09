import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  selectError,
  selectIsError,
  selectIsLoading,
  selectSubredditFeed,
} from "./miniRedditPostsSlice";

function MiniRedditPosts() {
  const dispatch = useDispatch();
  const subredditFeed = useSelector(selectSubredditFeed);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchPosts({ subreddit: "all", params: "limit=5" }));
  }, [dispatch]);

  // Check if isLoading is true or if redditPosts is empty
  if (isLoading || !subredditFeed.length) {
    return (
      <div className="loader">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error">
        <p>Error: {error}</p>
      </div>
    );
  }

  // Once isLoading is false and redditPosts is populated, render the posts
  return (
    <div className="App">
      {subredditFeed.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.subreddit}</p>
        </div>
      ))}
    </div>
  );
}

export default MiniRedditPosts;
