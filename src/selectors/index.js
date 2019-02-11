import { createSelector } from "reselect";

const dateRangeGetter = state => state.dateRange;
const selectedGetter = state => state.selected;
const articlesGetter = state => state.articles;
const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filteredArticlesSelector = createSelector(
  articlesGetter,
  dateRangeGetter,
  selectedGetter,
  (articles, dateRange, selected) => {
    //state мы уже один раз передали теперь вытянули из стейта
    const { from, to } = dateRange;

    return articles.articles.filter(article => {
      const published = Date.parse(article.date);
      return (
        (!selected || !selected.length || selected.includes(article.id)) &&
        (!from || !to || (published > from && published < to))
      );
    });
  }
);

export const commentSelectorFactory = () =>
  createSelector(
    commentsGetter,
    idGetter,
    (comments, id) => comments.find(comment => comment.id === id)
  );
