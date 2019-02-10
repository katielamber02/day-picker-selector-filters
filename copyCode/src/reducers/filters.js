import {
  SET_DATE,
  RESET,
  DELETE_ARTICLE,
  SET_SELECT_ARTICLES
} from "../actionTypes";
const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
};

export default (filters = defaultFilters, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_DATE:
      return { ...filters, dateRange: payload.dateRange };
    case SET_SELECT_ARTICLES:
      return { ...filters, selected: payload.selected };
    case DELETE_ARTICLE:
      return {
        ...filters,
        selected: filters.selected.filter(id => id !== payload.id)
      };
  }
  return filters;
};
