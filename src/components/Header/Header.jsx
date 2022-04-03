import React, { Suspense, lazy, useState, useCallback } from 'react';

import { Button, Image } from 'antd';
import { useMovieData } from '../../hooks/useMovieData';
import { Logo } from '../Logo/Logo';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { CustomModal } from '../CustomModal/CustomModal';
import { AddEditMovie } from '../AddEditMovie/AddEditMovie';
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

export const Header = () => {
  const {
    state: { triggerDescription, movieContent }
  } = useMovieData();

  const [openModal, setOpenModal] = useState(false);

  const handleAddModal = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };
  const handleCloseDescription = useCallback(() => {
    setOpenModal(!openModal);
  }, [openModal, setOpenModal]);

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
            onClick={handleCloseDescription}
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
            <Search />
          )}
        </Suspense>
      </ErrorBoundary>
      <CustomModal openModal={openModal} handleCancel={handleCloseDescription}>
        <AddEditMovie
          title='ADD MOVIE'
          openAdd
          handleCancel={handleCloseDescription}
        />
      </CustomModal>
    </header>
  );
};
