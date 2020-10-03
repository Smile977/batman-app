import React, {useReducer} from 'react';
import axios from 'axios';
import {MovieContext} from './movieContext';
import {movieReducer} from './movieReducer';
import {CLEAR_CARDS, CLEAR_TOTAL_RESULT, SEARCH_CARDS, SET_LOADING, SET_CURRENT_PAGE} from '../types';

export const MovieState = ({children}) => {

  const initialState = {
    cards: [],
    totalResults: '',
    loading: false,
    searchValue: '',
    pageNumber: 1,
  }

  const [state, dispatch] = useReducer(movieReducer, initialState);

  const setCurrentPage = async (value, pageNumber) => {
    setLoading();

    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${value}&page=${pageNumber}`
    );

    console.log('response = ', response.data.Search);

    dispatch({
      type: SET_CURRENT_PAGE,
      payload: {
        data: response.data,
        pageNumber: pageNumber
      }
    })
  }


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
      search, setLoading, clearCards, clearTotalResults, setCurrentPage,
      cards, totalResults, loading, searchValue
    }}>
      {children}
    </MovieContext.Provider>
  )
}


