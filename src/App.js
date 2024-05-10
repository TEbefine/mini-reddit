import React from "react";
import Nav from "./component/Nav";
import MiniRedditPosts from "./features/miniPosts/MiniRedditPosts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          <span className="mini">
            M<span className="logo">i</span>N<span className="logo">i</span>
          </span>{" "}
          redd<span className="logo">i</span>t
        </h1>
      </div>
      <Nav />
      <MiniRedditPosts />
    </div>
  );
}

export default App;
