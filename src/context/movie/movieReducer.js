import {
  CLEAR_CARDS,
  CLEAR_TOTAL_RESULT,
  SEARCH_CARDS,
  SET_LOADING
} from '../types';

const handlers = {
  [SEARCH_CARDS]: (state, {payload}) => {
    return (
      {
        ...state,
        cards: payload.data.Search,
        totalResults: payload.data.totalResults,
        loading: false,
        searchValue: payload.searchValue,
      }
    )
  },
  [SET_LOADING]: (state) => ({...state, loading: true}),
  [CLEAR_CARDS]: (state) => ({...state, cards: []}),
  [CLEAR_TOTAL_RESULT]: (state) => ({...state, totalResults: ''}),
  DEFAULT: (state) => state,
}

export const movieReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}