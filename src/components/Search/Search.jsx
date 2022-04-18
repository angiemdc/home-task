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

  return (
    <section className='search__content'>
      <h1>FIND YOUR MOViE</h1>
      <div>
        <div>
          <input
            name='movie'
            type='search'
            id='search'
            className='search__input'
            placeholder='What do you want to watch?'
            ref={inputEl}
          />
        </div>
        <button type='button' onClick={handleSubmit}>
          search
        </button>
      </div>
    </section>
  );
};

Search.defaultProps = {
  details: []
};
