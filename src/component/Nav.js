import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../features/miniPosts/miniRedditPostsSlice";

function Nav() {
  const [selection, setSelection] = useState("dog");
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
        <option value="Home">Home</option>
        <option value="Animals">Animals</option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="DIY">DIY</option>
        <option value="Gaming">Gaming</option>
        <option value="Learning">Learning</option>
        <option value="Lifehacks">Lifehacks</option>
        <option value="Music">Music</option>
        <option value="Android">Android</option>
        <option value="Apple">Apple</option>
        <option value="Asia">Asia</option>
        <option value="ArianaGrande">ArianaGrande</option>
        <option value="Bitcoin">Bitcoin</option>
        <option value="Anime">Anime</option>
        <option value="Blackpink">Blackpink</option>
        <option value="Books">Books</option>
        <option value="Drawing">Drawing</option>
        <option value="Nasa">Nasa</option>
        <option value="chatGPT">chatGPT</option>
        <option value="Funny">Funny</option>
        <option value="Korea">Korea</option>
        <option value="Space">Space</option>
        <option value="OnePiece">OnePiece</option>
        <option value="Nvidia">Nvidia</option>
        <option value="Ghibli">Ghibli</option>
        <option value="TaylorSwift">TaylorSwift</option>
        <option value="NintendoSwitch">NintendoSwitch</option>
        <option value="Teslamotors">Teslamotors</option>
        <option value="Technology">Technology</option>
        <option value="Beyonce">Beyonce</option>
        <option value="Boardgames">Boardgames</option>
        <option value="Amd">Amd</option>
        <option value="Design">Design</option>
        <option value="Sciencememes">Sciencememes</option>
        <option value="Youtube">Youtube</option>
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
