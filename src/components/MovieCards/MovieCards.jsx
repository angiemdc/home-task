import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
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

  const filterData = useMemo(() => {
    return moviesData.filter((movie) => {
      return searchQuery
        ? movie?.title?.toLowerCase().includes(searchQuery.toLowerCase())
        : movie?.rating > 7;
    });
  }, [moviesData, searchQuery]);

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
