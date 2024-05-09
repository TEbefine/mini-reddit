import React from "react";
import Nav from "./component/Nav";

import "./App.css";
import MiniRedditPosts from "./features/miniPosts/MiniRedditPosts";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Mini Reddit</h1>
      </div>
      <Nav />
      <MiniRedditPosts />
    </div>
  );
}

export default App;
