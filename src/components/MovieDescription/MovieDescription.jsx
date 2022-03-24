import React from 'react';
import PropTypes from 'prop-types';

import { Image, Space, Row, Col } from 'antd';

export const MovieDescription = ({ movieContent }) => {
  const { name, movieType, image, year, rating, runtime, description } =
    movieContent;
  return (
    <Space size={24} direction='vertical'>
      <Row gutter={[1, 24]} align='middle'>
        <Col span={6} style={{ paddingLeft: 0, position: 'relative' }}>
          <Image width={180} src={image} preview={false} />
        </Col>
        <Col span={18}>
          <Row>
            <h1>{name}</h1>
            <spam>{rating}</spam>
          </Row>
          <Row>{movieType}</Row>
          <Row span={8}>
            <Col>{year}</Col>
            <Col>{runtime}</Col>
          </Row>
          <Row>{description}</Row>
        </Col>
      </Row>
    </Space>
  );
};

MovieDescription.defaultProps = {
  movieContent: {}
};

MovieDescription.propTypes = {
  movieContent: PropTypes.shape({
    name: PropTypes.string,
    movieType: PropTypes.string,
    image: PropTypes.string,
    year: PropTypes.string,
    rating: PropTypes.string,
    runtime: PropTypes.string,
    description: PropTypes.string
  })
};
