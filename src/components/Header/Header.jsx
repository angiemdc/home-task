import React, { Suspense, lazy, useState, useCallback, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button, Image, Menu, Dropdown, Row, Space } from 'antd';
import { useMovieData } from '../../hooks/useMovieData';
import { Logo } from '../Logo/Logo';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { CustomModal } from '../CustomModal/CustomModal';
import { AddEditMovie } from '../AddEditMovie/AddEditMovie';
import { genres, sortByMenu } from '../../mock_data';
import sButton from '../../assets/images/searchButton.svg';

import './Header.modules.scss';

const MovieDescription = lazy(() =>
  import('../MovieDescription/MovieDescription').then((module) => ({
    default: module.MovieDescription
  }))
);

const Search = lazy(() =>
  import('../Search/Search').then((module) => ({
    default: module.Search
  }))
);

const DropdownMenu = React.memo(({ handleMenuClick, items, children }) => {
  return (
    <Dropdown.Button
      overlay={
        <Menu onClick={handleMenuClick}>
          {items.map((item) => (
            <Menu.Item key={item}>{item}</Menu.Item>
          ))}
        </Menu>
      }
    >
      {children}
    </Dropdown.Button>
  );
});

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const movieId = params.get('movie');

  const {
    state: { triggerDescription, movieContent },
    closeMovieDescription,
    openMovieDescription
  } = useMovieData();

  const handleAddModal = (e) => {
    e.preventDefault();
    setOpenModal((open) => !open);
  };

  const handleCloseModal = useCallback(() => {
    setOpenModal((open) => !open);
  }, [setOpenModal]);

  const openSearch = () => {
    closeMovieDescription();
    navigate({
      pathname: '/'
    });
  };

  const handleMenuClick = useCallback(
    (e) => {
      if (sortByMenu.includes(e.key)) {
        setParams({ sortBy: e.key });
      }
      if (genres.includes(e.key)) {
        setParams({ genre: e.key });
      }
    },
    [setParams]
  );

  useEffect(() => {
    if (movieId) {
      openMovieDescription(movieId);
    }
  }, [movieId, openMovieDescription]);

  return (
    <header
      className={`header ${!triggerDescription ? 'header__withImage' : ''}`}
    >
      <div className='navSection'>
        <Logo />

        {triggerDescription ? (
          <Button
            icon={<Image width={10} src={sButton} preview={false} />}
            ghost
            onClick={openSearch}
          />
        ) : (
          <Button type='button' className='btn' onClick={handleAddModal}>
            + ADD MOVIE
          </Button>
        )}
      </div>
      <ErrorBoundary>
        <Suspense fallback={<h1>loading...</h1>}>
          {triggerDescription ? (
            <MovieDescription movieContent={movieContent} />
          ) : (
            <>
              <Row>
                <Space wrap>
                  <DropdownMenu
                    style={{ position: 'relative' }}
                    handleMenuClick={handleMenuClick}
                    items={sortByMenu}
                  >
                    sortBy
                  </DropdownMenu>
                  <DropdownMenu
                    style={{ position: 'relative' }}
                    handleMenuClick={handleMenuClick}
                    items={genres}
                  >
                    genres
                  </DropdownMenu>
                </Space>
              </Row>
              <Row>
                <Search />
              </Row>
            </>
          )}
        </Suspense>
      </ErrorBoundary>
      <CustomModal openModal={openModal} handleCancel={handleCloseModal}>
        <AddEditMovie
          title='ADD MOVIE'
          openAdd
          handleCancel={handleCloseModal}
        />
      </CustomModal>
    </header>
  );
};
