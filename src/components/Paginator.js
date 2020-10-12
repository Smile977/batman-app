import React from 'react';
import {createPages} from '../UI/createPages';

export const Paginator = ({totalResults, currentPage, getPageNumber}) => {
  const pages = [];
  const pagesCount = Math.ceil(totalResults / 10);
  currentPage = +currentPage;

  createPages(pages, pagesCount, currentPage);

  const renderButtons = () => {
    return pages.map((page, index) => {
      return (
        <button
          className={currentPage == page ? "paginator-item-active" : "paginator-item"}
          id={page}
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