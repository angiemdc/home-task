import React, { useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';

import './Search.modules.scss';

export const Search = ({ details }) => {
  const [searchMovie, setSearchMovie] = useState('');
  const inputEl = useRef(null);

  const filteredMovie = useMemo(() => {
    return details.filter((movie) => {
      return movie.name === searchMovie;
    });
  }, [details, searchMovie]);

  console.log(filteredMovie);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchMovie(inputEl.current.value);
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

Search.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      movieType: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
};
