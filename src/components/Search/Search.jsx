/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './Search.modules.scss';

export const Search = () => {
  const navigate = useNavigate();
  const inputEl = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${inputEl.current.value}`, { replace: false });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search/${inputEl.current.value}`, { replace: false });
    }
  };

  return (
    <section className='search__content'>
      <h1>FIND YOUR MOViE</h1>
      <div>
        <div>
          <input
            name='movie'
            type='search'
            className='search__input'
            placeholder='What do you want to watch?'
            ref={inputEl}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button type='button' data-testid='searchBtn' onClick={handleSubmit}>
          search
        </button>
      </div>
    </section>
  );
};

Search.defaultProps = {
  details: []
};
