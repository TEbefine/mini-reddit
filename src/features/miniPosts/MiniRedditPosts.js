import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  selectPostsSlice,
  selectSubredditFeed,
} from "./miniRedditPostsSlice";
import Post from "../../component/Post";

function MiniRedditPosts() {
  const dispatch = useDispatch();
  const subredditFeed = useSelector(selectSubredditFeed);
  const { isLoading, isError, error } = useSelector(selectPostsSlice);

  useEffect(() => {
    dispatch(fetchPosts({ subreddit: "dog", params: "limit=10" }));
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

  return (
    <div className="App">
      {subredditFeed.map((post) => (
        <Post
          id={post.id}
          title={post.title}
          author={post.author}
          postPic={post.thumbnail}
          num_comments={post.num_comments}
          score={post.ups}
          postTime={post.created_utc}
        />
      ))}
    </div>
  );
}

export default MiniRedditPosts;
