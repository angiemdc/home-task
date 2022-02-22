import React from 'react';
import { Logo } from '../Logo/Logo';

import './Header.modules.scss';

export const Header = ({ children }) => (
  <header className='header'>
    <div className='navSection'>
      <Logo />
      <button type='submit' className='btn'>
        + ADD MOVIE
      </button>
    </div>
    <div>{children}</div>
  </header>
);
