import {
  CLEAR_CARDS,
  CLEAR_TOTAL_RESULT,
  SEARCH_CARDS,
  SET_LOADING
} from '../types';

const handlers = {
  [SEARCH_CARDS]: (state, {payload}) => {
    // console.log('payload.Search = ', payload.Search);
    // console.log('payload.totalResults = ', payload.totalResults);
    return (
      {
        ...state,
        cards: payload.Search,
        totalResults: payload.totalResults,
        loading: false}
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