import React, { Component } from "react";

class CommentForm extends Component {
  state = {
    user: "",
    comment: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      user: "",
      comment: ""
    });
  };
  handleChange = type => event => {
    console.log("type", type);
    console.log(typeof type);
    console.log("[type]", [type]);
    const { value } = event.target;
    this.setState({
      [type]: value
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          user:
          <input value={this.state.user} onChange={this.handleChange("user")} />
          comment:
          <input
            value={this.state.comment}
            onChange={this.handleChange("comment")}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
export default CommentForm;
