import React, { Component as ReactComponent } from "react";

export default OriginalComponent =>
  class ModifiedComponent extends ReactComponent {
    state = {
      opened: false
    };
    toggleOpen = ev => {
      ev && ev.preventDefault && ev.preventDefault();
      this.setState({
        opened: !this.state.opened
      });
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
