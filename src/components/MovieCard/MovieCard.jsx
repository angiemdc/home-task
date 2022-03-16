/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Image, Space, Card, Row, Col, Menu, Dropdown, message } from 'antd';
import { Actions } from '../../context/ModalContext';
import { useAddDeleteModal } from '../../hooks/useAddDeleteModal';

/**
 * Renders the Card of a movie
 * @param props.name string render the name of the movie
 * @param props.movieType string render the type  of the movie
 * @param props.image string render the src of the image
 * @param props.year string render the year of the movie

 * @returns
 */

export const MovieCard = ({ name, movieType, image, year }) => {
  const { updateModalType } = useAddDeleteModal();
  function handleButtonClick(e) {
    e.preventDefault();
    console.log('click left button', e);
  }

  function handleMenuClick(e) {
    console.log(e.key);
    if (e.key === 'Edit') updateModalType(Actions.OPEN_MODAL_TO_EDIT);
    if (e.key === 'Delete') updateModalType(Actions.OPEN_MODAL_TO_DELETE);
  }

  const menu = () => (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='Edit'>Edit</Menu.Item>
      <Menu.Item key='Delete'>Delete</Menu.Item>
    </Menu>
  );

  return (
    <Space size={24} direction='vertical'>
      <Card style={{ width: 324 }}>
        <Col span={24} style={{ paddingLeft: 0, position: 'relative' }}>
          <Image width={324} src={image} preview={false} />
          <Dropdown.Button
            onClick={handleButtonClick}
            overlay={menu}
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

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  movieType: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};
