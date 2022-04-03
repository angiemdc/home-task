/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Image, Space, Card, Row, Col, Menu, Dropdown, message } from 'antd';
import { Actions } from '../../context/MovieContext';

const DropdownMovie = (props) => {
  const handleMenuClick = (e) => {
    if (e.key === 'Edit') console.log('holi');
    if (e.key === 'Delete') console.log('hi');
  };

  return (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='Edit'>Edit</Menu.Item>
      <Menu.Item key='Delete'>Delete</Menu.Item>
    </Menu>
  );
};

/**
 * Renders the Card of a movie
 * @param props.name string render the name of the movie
 * @param props.movieType string render the type  of the movie
 * @param props.image string render the src of the image
 * @param props.year string render the year of the movie

 * @returns
 */
const MovieCard = ({ movieData }) => {
  const { name, movieType, image, year } = movieData;
  const setDetail = useCallback((e) => {
    e.preventDefault();
  }, []);
  return (
    <Space size={24} direction='vertical'>
      <Card style={{ width: 324 }}>
        <Col span={24} style={{ paddingLeft: 0, position: 'relative' }}>
          <Image width={324} src={image} preview={false} onClick={setDetail} />
          <Dropdown.Button
            overlay={DropdownMovie(movieData)}
            style={{
              padding: 0,
              position: 'absolute',
              top: '10px',
              right: '10px'
            }}
          />
        </Col>
        <Row gutter={[1, 16]} align='middle' justify='space-between'>
          <Col span={24}>
            <Row justify='space-between'>
              <Col span={16}>
                <p>{name}</p>
              </Col>
              <Col span={8}>
                <p>{year}</p>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <p>{movieType}</p>
          </Col>
        </Row>
      </Card>
    </Space>
  );
};

export const MemoizedMovie = React.memo(MovieCard);

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  movieType: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};
