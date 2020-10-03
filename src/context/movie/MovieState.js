import React, {useReducer} from 'react';
import axios from 'axios';
import {MovieContext} from './movieContext';
import {movieReducer} from './movieReducer';
import {CLEAR_CARDS, CLEAR_TOTAL_RESULT, SEARCH_CARDS, SET_LOADING} from '../types';

export const MovieState = ({children}) => {

  const initialState = {
    cards: [],
    totalResults: '',
    loading: false,
    searchValue: '',
  }

  const [state, dispatch] = useReducer(movieReducer, initialState);

  const search = async (value) => {{
    setLoading();

    // `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${value}&page=1`
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${value}`
    );

    dispatch({
      type: SEARCH_CARDS,
      payload: {
        data: response.data,
        searchValue: value,
      }
    })
  }}

  const clearCards = () => dispatch({type: CLEAR_CARDS});
  const clearTotalResults = () => dispatch({type: CLEAR_TOTAL_RESULT});
  const setLoading = () => dispatch({type: SET_LOADING});

  const {cards, totalResults, loading, searchValue} = state;

  return (
    <MovieContext.Provider value={{
      search, setLoading, clearCards, clearTotalResults ,cards, totalResults, loading, searchValue
    }}>
      {children}
    </MovieContext.Provider>
  )
}


