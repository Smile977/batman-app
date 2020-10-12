import React from 'react';

export const NotFoundMessage = ({ searchValue }) => {


  return (
    <h3
      className="errorMessage"
    >On request <span>"{searchValue}"</span> nothing found! Please try again!</h3>
  )
}