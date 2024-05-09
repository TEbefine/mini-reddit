import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../features/miniPosts/miniRedditPostsSlice";

function Nav() {
  const [selection, setSelection] = useState("NBA");
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ subreddit: selection, params: "limit=10" }));
  }, [dispatch, selection]);

  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm.length > 0) {
      dispatch(fetchPosts({ subreddit: searchTerm, params: "limit=10" }));
      setSearchTerm("");
      setSelection("");
    }
  }

  return (
    <nav>
      <select
        className="select-container"
        value={selection}
        onChange={(e) => setSelection(e.target.value)}
      >
        <option value="">Category</option>
        <option value="dog">Dog</option>
        <option value="cat">cat</option>
        <option value="blackpink">blackpink</option>
        {/* Add more options as needed */}
      </select>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="input-field"
        />
      </form>
    </nav>
  );
}

export default Nav;
