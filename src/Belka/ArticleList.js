import React, { Component } from "react";
import Article from "./Article";
import Accordeon from "../hoc/accordeon";

import Calendar from "./Filters/Calendar";
import { connect } from "react-redux";
import SelectFilter from "./Filters/SelectFilter";
import {
  initializeArticlesinDB,
  getArticles,
  getComments,
  remove
} from "../actions/action-index";

class ArticleList extends Component {
  componentDidMount() {
    //this.props.initializeArticlesinDB();
    this.props.getArticles();
    //this.props.getComments();
  }

  render() {
    const {
      openedId,
      toggleOpenEl,
      articles,
      onRemove,
      dateRange,
      selected
    } = this.props;

    const { from, to } = dateRange;

    const filteredArticles = articles.filter(article => {
      const published = Date.parse(article.date);
      return (
        (!selected || !selected.length || selected.includes(article.id)) &&
        (!from || !to || (published > from && published < to))
      );
    });

    const articleElements = filteredArticles.map(article => (
      <div key={article.id}>
        <Article
          article={article}
          opened={article.id === openedId}
          toggleOpen={toggleOpenEl(article.id)}
          remove={() => onRemove(article.id)}
        />
      </div>
    ));

    return (
      <div>
        <Calendar />
        <SelectFilter articles={articles} />

        {articleElements}
      </div>
    );
  }
}
const mapStateToProps = ({ articles, dateRange, selected }) => {
  return {
    articles: articles.articles,
    dateRange: dateRange,
    selected: selected
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => dispatch(remove(id)),
    initializeArticlesinDB: () => dispatch(initializeArticlesinDB()),
    getArticles: () => dispatch(getArticles()),
    getComments: () => dispatch(getComments())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accordeon(ArticleList));
