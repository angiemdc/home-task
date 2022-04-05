import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Image, Space, Card, Row, Col, Menu, Dropdown } from 'antd';
import { useMovieData } from '../../hooks/useMovieData';
import { CustomModal } from '../CustomModal/CustomModal';
import { AddEditMovie } from '../AddEditMovie/AddEditMovie';

import 'antd/dist/antd.css';

const DropdownMovie = React.memo(({ handleMenuClick }) => {
  return (
    <Dropdown.Button
      overlay={
        <Menu onClick={handleMenuClick}>
          <Menu.Item key='Edit'>Edit</Menu.Item>
          <Menu.Item key='Delete'>Delete</Menu.Item>
        </Menu>
      }
      style={{
        padding: 0,
        position: 'absolute',
        top: '10px',
        right: '10px'
      }}
    />
  );
});

/**
 * Renders the Card of a movie
 * @param props.title string render the title of the movie
 * @param props.movieType string render the type  of the movie
 * @param props.image string render the src of the image
 * @param props.year string render the year of the movie
 * @returns
 */
const MovieCard = ({ movieData }) => {
  const { openMovieDescription } = useMovieData();
  const { title, movieType, image, year, id } = movieData;
  const [openModal, setOpenModal] = useState(false);
  const modalTitle = useRef('');
  const openEdit = useRef(false);

  const handleMenuClick = useCallback(
    (e) => {
      setOpenModal(!openModal);
      if (e.key === 'Edit') {
        modalTitle.current = 'Edit Movie';
        openEdit.current = true;
      }
      if (e.key === 'Delete') {
        modalTitle.current = 'Delete Movie';
        openEdit.current = false;
      }
    },
    [openModal]
  );
  const handleCloseDescription = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal, setOpenModal]);

  const setDetail = (e) => {
    e.preventDefault();
    openMovieDescription(id);
  };

  return (
    <Space size={24} direction='vertical'>
      <Card style={{ width: 324 }}>
        <Col span={24} style={{ paddingLeft: 0, position: 'relative' }}>
          <Image width={324} src={image} preview={false} onClick={setDetail} />
          <DropdownMovie handleMenuClick={handleMenuClick} />
        </Col>
        <Row gutter={[1, 16]} align='middle' justify='space-between'>
          <Col span={24}>
            <Row justify='space-between'>
              <Col span={16}>
                <p>{title}</p>
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
      <CustomModal openModal={openModal} handleCancel={handleCloseDescription}>
        <AddEditMovie
          title={modalTitle.current}
          openEdit={openEdit.current}
          handleCancel={handleCloseDescription}
          id={id || ''}
          initialValues={openEdit.current ? movieData : {}}
        />
      </CustomModal>
    </Space>
  );
};

export const MemoizedMovie = React.memo(MovieCard);

MovieCard.defaultProps = {
  movieData: {}
};

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    title: PropTypes.string,
    movieType: PropTypes.string,
    image: PropTypes.string,
    year: PropTypes.string,
    id: PropTypes.string
  })
};
