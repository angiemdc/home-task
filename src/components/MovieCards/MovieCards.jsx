import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';

import { MemoizedMovie } from '../MovieCard/MovieCard';

/**
 *  return a list of cards 
 * @param props.movieData array  list of movies to render

 * @returns
 */

export const MovieCards = ({ moviesData }) => {
  return (
    <Row gutter={[16, 16]}>
      {moviesData.map((movieData) => {
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
