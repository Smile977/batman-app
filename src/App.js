import React from 'react';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {CardList} from './components/Cards/CardList';
import {MovieState} from './context/movie/MovieState';

function App() {
  return (
    <MovieState>
      <div className="container">
        <Header/>
        <Main>
          <CardList/>
        </Main>
      </div>
    </MovieState>
  );
}

export default App;
