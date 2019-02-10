import React, { Component } from "react";
import Comment from "./Comment";
import toggleOpen from "../hoc/toggleOpen";

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };

  render() {
    const { comments, opened, toggleOpen } = this.props;
    const text = opened ? "close comments" : "open comments";
    if (!comments.length) return <h3>No comments</h3>;

    return (
      <div>
        <button
          onClick={toggleOpen}
          className="danger"
          style={{ fontSize: "1.5em" }}
        >
          {text}
        </button>

        {opened
          ? comments.map(comment => (
              <Comment comment={comment} key={comment.id} />
            ))
          : null}
      </div>
    );
  }
}
export default toggleOpen(CommentList);
