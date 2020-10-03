import React from 'react';
import {Search} from './Search';
import {Avatar} from './Avatar';
import {MainTitle} from './MatinTitle';

export const Header = () => {
  return (
      <header className="form-inline justify-content-around badge-info header">
        <MainTitle />

        <Search />

        <Avatar />
      </header>
  )
}