import React, {useContext} from 'react';
import {Card} from './Card';
import {MovieContext} from '../../context/movie/movieContext';
import {Loader} from '../Loader';

export const CardList = () => {
  const movie = useContext(MovieContext);
  const {cards, totalResults, loading, searchValue, setCurrentPage} = movie;

  console.log('setCurrentPage =', setCurrentPage);

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
          <button onClick={() => setCurrentPage(searchValue, 2)}>page 2</button>
          </React.Fragment>

      }
    </React.Fragment>
  )
}