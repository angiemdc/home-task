import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Search.modules.scss';

export const Search = ({ details }) => {
  const [searchMovie, setSearchMovie] = useState('');

  const filteredMovie = details?.length
    ? details.filter((movie) => {
        return movie.name === searchMovie;
      })
    : [];
  console.log(filteredMovie);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[1].value);
    setSearchMovie(e.target[1].value);
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

Search.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      movieType: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
