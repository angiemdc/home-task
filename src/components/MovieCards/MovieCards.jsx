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
  const sortDateName = params.get('sortBy');

  const filterData = useMemo(() => {
    return moviesData.filter((movie) => {
      if (searchQuery && !genre)
        return movie?.title?.toLowerCase().includes(searchQuery.toLowerCase());
      if (genre) {
        const movieTypes = movie?.movieType ? movie.movieType.split(', ') : [];

        return movieTypes.some((type) =>
          type.toLowerCase().includes(genre.toLowerCase())
        );
      }
      return movie?.rating > 7;
    });
  }, [moviesData, searchQuery, genre]);

  const getSortedDateName = useMemo(() => {
    if (!sortDateName) return filterData;
    const sortType = {
      date: 'year',
      name: 'title'
    };
    const sortName = sortDateName.toLowerCase();
    const sortTypeName = sortType[sortName] ?? sortName;
    return sortTypeName ? sortBy(filterData, sortTypeName) : filterData;
  }, [filterData, sortDateName]);

  return (
    <Row gutter={[16, 16]}>
      {getSortedDateName.map((movieData) => {
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
