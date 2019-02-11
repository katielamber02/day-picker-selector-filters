import React, { Component } from "react";
import { connect } from "react-redux";
import { commentSelectorFactory } from "../selectors";

class Comment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div style={{ fontSize: "0.7em" }}>
        {comment.text}

        <h6> by {comment.user}</h6>
      </div>
    );
  }
}
const mapStateToProps = () => {
  const commentSelector = commentSelectorFactory();
  return (state, ownProps) => {
    return {
      comment: commentSelector(state, ownProps)
    };
  };
};
export default connect(mapStateToProps)(Comment);
