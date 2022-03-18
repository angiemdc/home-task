/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';

import { MemoizedMovie } from '../MovieCard/MovieCard';

/**
 *  return a list of cards 
 * @param props.movieData array  list of movies to render

 * @returns
 */

export const MovieCards = ({ movieData }) => {
  return (
    <Row gutter={[16, 16]}>
      {movieData.map(({ id, ...others }) => (
        <Col key={id} span={8}>
          <MemoizedMovie {...others} key={id} />
        </Col>
      ))}
    </Row>
  );
};

MovieCards.defaultProps = {
  movieData: []
};

MovieCards.propTypes = {
  movieData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      movieType: PropTypes.string,
      name: PropTypes.string,
      year: PropTypes.string
    })
  )
};
