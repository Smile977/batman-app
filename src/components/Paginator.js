import React from 'react';

export const Paginator = ({totalResults, setCurrentPage, searchValue}) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getPageNumber = (event) => {
    console.log('event.target', event.target.id);
    setCurrentPage(searchValue, event.target.id);
  }

  const renderButtons = () => {
    return pages.map((page, index) => {
      return (
        <button
          id={index + 1}
          onClick={getPageNumber}
        >{index + 1}</button>
      )
    })
  }

  return (
    <div className="paginator">
      { renderButtons() }
    </div>
  )
}