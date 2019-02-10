import React, { Component } from "react";
//not finished

export default Wrapped =>
  class Accordeon extends Component {
    state = {
      openedId: null
    };
    toggleOpenEl = openedId => ev => {
      this.setState({
        openedId: openedId === this.state.openedId ? null : openedId
      });
    };
    render() {
      return (
        <Wrapped
          {...this.props}
          openedId={this.state.openedId}
          toggleOpenEl={this.toggleOpenEl}
        />
      );
    }
  };
