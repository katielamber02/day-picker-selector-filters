import React from "react";

export default function Comment({ comment }) {
  return (
    <div style={{ fontSize: "0.7em" }}>
      {comment.text}

      <h6> by {comment.user}</h6>
    </div>
  );
}
