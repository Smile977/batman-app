import React, {useContext, useEffect, useReducer} from 'react';
import {Card} from './Card';
import {MovieContext} from '../../context/movie/movieContext';
import {Loader} from '../Loader';
import {Paginator} from '../Paginator';
import {movieReducer} from '../../context/movie/movieReducer';


export const CardList = () => {

  const [state, dispatch] = useReducer(movieReducer);

  const movie = useContext(MovieContext);
  const {cards, totalResults, loading, searchValue, setCurrentPage, currentPage} = movie;


  // useEffect(() => {
  //   dispatch(setCurrentPage(searchValue, currentPage));
  // }, [dispatch, currentPage]);

  const getPageNumber = (event) => {
    setCurrentPage(searchValue, event.target.id);
  }

  return (
    <React.Fragment>
      {
        loading
          ? <Loader />
          : <React.Fragment>
            <div className="cardList__title">
              {
                totalResults
                  ? <h3 className="modal-title ml-5">
                    Your searched for: {searchValue}: {totalResults} results found
                  </h3>
                  : null
              }
            </div>
            <div className="wrap">
              {cards.map((card, index) => {
                return (
                  <Card
                    key={card + index}
                    card={card}
                  />
                )
              })}
            </div>
            {cards.length !== 0
              ? <Paginator
                  totalResults={totalResults}
                  setCurrentPage={setCurrentPage}
                  searchValue={searchValue}
                  currentPage={currentPage}
                  getPageNumber={getPageNumber}
                />
              : null}
          </React.Fragment>

      }
    </React.Fragment>
  )
}