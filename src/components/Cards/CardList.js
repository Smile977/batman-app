import React, {useContext} from 'react';
import {Card} from './Card';
import {MovieContext} from '../../context/movie/movieContext';
import {Loader} from '../Loader';
import {Paginator} from '../Paginator';
import {NotFoundMessage} from "../NotFoundMessage";

export const CardList = () => {
  const movie = useContext(MovieContext);
  const {
    cards = [],
    totalResults,
    loading,
    searchValue = '',
    setCurrentPage,
    currentPage,
  } = movie;

  const getPageNumber = (event) => {
    setCurrentPage(searchValue, event.target.id);
  }

  return (
    <React.Fragment>
      {
        loading
          ? <Loader />
          : cards.length !== 0
            ? <React.Fragment>
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
                    currentPage={currentPage}
                    getPageNumber={getPageNumber}
                  />
                  : null}
              </React.Fragment>
            : searchValue !== '' ? <NotFoundMessage searchValue={searchValue}/> : null
      }
    </React.Fragment>
  )
}
