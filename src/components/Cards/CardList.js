import React, {useContext} from 'react';
import {Card} from './Card';
import {MovieContext} from '../../context/movie/movieContext';

export const CardList = () => {
  const movie = useContext(MovieContext);
  const {cards, totalResults, loading, searchValue} = movie;

  return (
    <React.Fragment>
      {
        loading
          ? <h3 className="text-center mt-3">Loading...</h3>
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
          </React.Fragment>

      }
    </React.Fragment>
  )
}