import React from "react";
import { useSelector } from "react-redux";
import { selectPostsSlice, selectSubredditFeed } from "./miniRedditPostsSlice";
import Post from "../../component/Post";

function MiniRedditPosts() {
  const subredditFeed = useSelector(selectSubredditFeed);
  const { isLoading, isError, error } = useSelector(selectPostsSlice);

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
