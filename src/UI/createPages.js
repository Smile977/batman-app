import React from 'react';

export const createPages = (pages, pagesCount, currentPage) => {
  if(pagesCount > 10) {
    if(currentPage > 5) {
      console.log(currentPage)
      for (let i = currentPage - 4; i <= currentPage + 5; i++) {
        pages.push(i)
        if(i === pagesCount) break
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i)
        if(i === pagesCount) break
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
  }
}