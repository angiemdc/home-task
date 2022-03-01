import React from 'react';

import './Search.modules.scss';

export const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[1].value);
  };

  return (
    <section className='search__content'>
      <h1>FIND YOUR MOViE</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>
          <input
            name='movie'
            type='search'
            id='search'
            className='search__input'
            placeholder='What do you want to watch?'
          />
        </label>
        <button type='submit'>search</button>
      </form>
    </section>
  );
};
