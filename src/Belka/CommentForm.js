import React, { Component } from "react";
import { addComment } from "../actions/action-index";
import { connect } from "react-redux";
import { mapToArr } from "../helpers";

class CommentForm extends Component {
  state = {
    user: "",
    text: ""
  };
  handleSubmit = event => {
    this.props.addComment(this.state);
    event.preventDefault();

    this.setState({
      user: "",
      text: ""
    });
  };
  handleChange = type => event => {
    // console.log("type", type);
    // console.log(typeof type);
    // console.log("[type]", [type]);
    const { value } = event.target;
    this.setState({
      [type]: value
    });
  };
  render() {
    const comments = mapToArr(this.props.comments);

    console.log("comments in FORM", comments);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          user:
          <input value={this.state.user} onChange={this.handleChange("user")} />
          comment:
          <input
            value={this.state.comment}
            onChange={this.handleChange("text")}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("ownProps in FORM", ownProps);
  return {
    addComment: comment => dispatch(addComment(comment, ownProps.articleId))
  };
};
export default connect(
  state => {
    return {
      comments: state.comments
    };
  },

  mapDispatchToProps
)(CommentForm);
