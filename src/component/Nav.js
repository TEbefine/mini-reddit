import React, { useState } from "react";

function Nav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selection, setSelection] = useState("");
  return (
    <nav>
      <div>
        <select
          value={selection}
          onChange={(e) => setSelection(e.target.value)}
        >
          <option value="">Category</option>
          <option value="popular">Popular</option>
          <option value="new">New</option>
          <option value="top">Top</option>
          {/* Add more options as needed */}
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
      </div>
    </nav>
  );
}

export default Nav;
