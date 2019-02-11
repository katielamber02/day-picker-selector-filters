import { connect } from "react-redux";
import { setSelectArticles } from "../../actions/action-index";
import Select from "react-select";
import "react-select/dist/react-select.css";

import React, { Component } from "react";

class SelectFilter extends Component {
  handleChangeSelected = selected => {
    this.props.onSetSelectArticles(selected.map(option => option.value));
    //ids only not the hole object
  };
  render() {
    const { selected, articles } = this.props;
    //console.log("selected", selected);

    const options = articles.map(article => {
      return {
        label: article.title,
        value: article.id
      };
    });
    let element = (
      <Select
        value={selected}
        onChange={this.handleChangeSelected}
        options={options}
        multi
        placeholder="please select an article"
      />
    );
    return <div>{element}</div>;
  }
}

const mapStateToProps = state => {
  return {
    selected: state.selected
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    onSetSelectArticles: selectedArticle =>
      dispatch(setSelectArticles(selectedArticle))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter);
