import { createSelector } from "reselect";

const dateRangeGetter = state => state.dateRange;
const selectedGetter = state => state.selected;
const articlesGetter = state => state.articles;

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

//-----------BEFORE SELECTOR
// export function filteredArticles(state) {
//   const { articles, dateRange, selected } = state;

//   console.log(articles, dateRange, "selected", selected);

//   const { from, to } = dateRange;

//   return articles.articles.filter(article => {
//     const published = Date.parse(article.date);
//     return (
//       (!selected || !selected.length || selected.includes(article.id)) &&
//       (!from || !to || (published > from && published < to))
//     );
//   });
// }
