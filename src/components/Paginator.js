import React, {useEffect, useReducer} from 'react';
import {createPages} from '../UI/createPages';
import {movieReducer} from '../context/movie/movieReducer';

export const Paginator = ({totalResults, setCurrentPage, searchValue, currentPage, getPageNumber}) => {

  const pages = [];
  const pagesCount = Math.ceil(totalResults / 10);

  currentPage = +currentPage
  // console.log('currentPage = ', typeof currentPage);

  // useEffect(() => {
  //   dispatch(setCurrentPage(searchValue, currentPage));
  // }, [dispatch, currentPage]);

  console.log('pages =', pages)

  createPages(pages, pagesCount, currentPage);

  // const getPageNumber = (event) => {
  //   setCurrentPage(searchValue, event.target.id);
  // }

  const renderButtons = () => {
    return pages.map((page, index) => {
      console.log('page =', page, 'currentPage =', currentPage, 'index =', index);

      return (
        <button
          className={currentPage == page ? "paginator-item-active" : "paginator-item"}
          id={index + 1}
          key={index}
          onClick={getPageNumber}
        >{page}</button>
      )
    })
  }

  return (
    <div className="paginator">
      { renderButtons() }
    </div>
  )
}