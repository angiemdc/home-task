/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
import React, { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { sortBy } from 'lodash';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';

import { MemoizedMovie } from '../MovieCard/MovieCard';

/**
 *  return a list of cards 
 * @param props.movieData array  list of movies to render

 * @returns
 */

export const MovieCards = ({ moviesData }) => {
  const { searchQuery } = useParams();
  const [params] = useSearchParams();
  const genre = params.get('genre');
  let sortDateName = params.get('sortBy').toLowerCase();
  console.log(sortDateName);
  sortDateName =
    sortDateName === 'date'
      ? 'year'
      : sortDateName === 'name'
      ? 'title'
      : sortDateName;

  console.log(sortDateName);

  let filterData = useMemo(() => {
    return moviesData.filter((movie) => {
      if (searchQuery && !genre)
        return movie?.title?.toLowerCase().includes(searchQuery.toLowerCase());
      if (genre)
        return movie?.movieType?.toLowerCase().includes(genre.toLowerCase());
      return movie?.rating > 7;
    });
  }, [moviesData, searchQuery, genre]);

  console.log(filterData);

  filterData = sortDateName ? sortBy(filterData, sortDateName) : filterData;

  return (
    <Row gutter={[16, 16]}>
      {filterData.map((movieData) => {
        return (
          <Col key={movieData?.id} span={8}>
            <MemoizedMovie movieData={movieData} key={movieData?.id} />
          </Col>
        );
      })}
    </Row>
  );
};

MovieCards.defaultProps = {
  moviesData: []
};

MovieCards.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      movieType: PropTypes.string,
      name: PropTypes.string,
      year: PropTypes.string,
      rating: PropTypes.string,
      runtime: PropTypes.string,
      description: PropTypes.string
    })
  )
};
