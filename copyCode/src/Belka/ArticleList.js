import React, { Component } from "react";
import Article from "./Article";
import Accordeon from "../hoc/accordeon";

import DateRange from "./Filters/DateRange";
import Calendar from "./Filters/Calendar";
import { connect } from "react-redux";
import SelectFilter from "./Filters/SelectFilter";
import { select } from "@redux-saga/core/effects";

class ArticleList extends Component {
  render() {
    const { openedId, toggleOpenEl, articles } = this.props;

    const articleElements = articles.map(article => (
      <div key={article.id}>
        <Article
          article={article}
          opened={article.id === openedId}
          toggleOpen={toggleOpenEl(article.id)}
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
  const { from, to } = dateRange;
  console.log("selected", selected);

  const filteredArticles = articles.articles.filter(article => {
    const published = Date.parse(article.date);
    //return !selected || !selected.length || selected.includes(article.id);

    return !from || !to || (published > from && published < to);
  });

  console.log("filteredArticles", filteredArticles);
  return {
    articles: filteredArticles
  };
};

export default connect(mapStateToProps)(Accordeon(ArticleList));
