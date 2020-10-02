import React, {useContext} from 'react';
import {Card} from './Card';
import {MovieContext} from '../../context/movie/movieContext';

export const CardList = () => {
  const movie = useContext(MovieContext);
  const {cards, totalResults, loading} = movie;

  // console.log('movie = ', movie);
  // console.log('totalResults = ', totalResults);
  console.log('cards = ', cards);
  return (
    <React.Fragment>
      {
        loading
          ? <h3 className="text-center mt-3">Loading...</h3>
          : <React.Fragment>
              <div className="cardList__title">
                <h3 className="modal-title ml-5">
                  Your searched for: Batmen: {totalResults} results found
                </h3>
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