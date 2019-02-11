import React, { Component } from "react";
import { connect } from "react-redux";

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
const mapStateToProps = (state, ownProps) => {
  console.log("ownProps", ownProps);
  return {
    comment: state.comments.find(comment => comment.id === ownProps.id)
  };
};
export default connect(mapStateToProps)(Comment);
