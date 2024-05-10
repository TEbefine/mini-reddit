import React from "react";
import { useSelector } from "react-redux";
import { selectComments } from "../features/miniComments/miniCommentsSlice";

function Comment() {
  const comments = useSelector(selectComments);

  return (
    <div className="commentsSec">
      <h4>
        This feature is currently under development and will be available in a
        future update. Thank you for your patience!
      </h4>
      {/* <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="textComment">
            <h5>{comment.author}</h5>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Comment;
