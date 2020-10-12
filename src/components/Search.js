import React, {useContext, useState} from 'react';
import {MovieContext} from '../context/movie/movieContext';

export const Search = () => {
  const [value, setValue] = useState('');
  const movie = useContext(MovieContext);

  const onSubmit = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    movie.clearCards();

    if (value.trim()) {
      movie.search(value.trim());
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        placeholder="Search"
        className="mr-sm-2  search"
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  )
}