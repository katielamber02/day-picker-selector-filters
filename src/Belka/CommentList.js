import React, { Component } from "react";
import Comment from "./Comment";
import toggleOpen from "../hoc/toggleOpen";
import CommentForm from "./CommentForm";

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };

  render() {
    const { article, opened, toggleOpen } = this.props;
    const { comments, id } = article;
    //console.log("article", comments, id);

    const text = opened ? "close comments" : "open comments";
    if (!comments || !comments.length)
      return (
        <div>
          <h3>No comments</h3>
          <CommentForm articleId={id} />
        </div>
      );

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
          ? comments.map(commentId => (
              <Comment id={commentId} key={commentId} />
            ))
          : null}
        <CommentForm articleId={id} />
      </div>
    );
  }
}
export default toggleOpen(CommentList);
