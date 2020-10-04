import React from 'react';

export const Card = ({ card }) => {
  const noImageUrl = 'https://www.supersizefashion.com/assets/image/sample.jpg';
  let { Title, Poster, Year, imdbID, Type } = card;

  if (Poster === "N/A") {
    Poster = noImageUrl;
  }

  return (
    <div className="card child">
        <img className="card-img-top" src={Poster} alt={Title} />
      <div className="card-body">
        <h6 className="card-title">Name: {Title}</h6>
        <p className="card-text">Year: {Year}</p>
        <p className="card-text">imbdID: {imdbID}</p>
        <p className="card-text">Type: {Type}</p>
      </div>
    </div>
  )
}