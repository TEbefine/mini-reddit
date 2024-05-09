import React from "react";
import Nav from "./component/Nav";

import "./App.css";
import MiniRedditPosts from "./features/miniPosts/MiniRedditPosts";

function App() {
  return (
    <div className="App">
      <Nav />
      <MiniRedditPosts />
    </div>
  );
}

export default App;
