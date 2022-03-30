import React, { Suspense, lazy } from 'react';

import { Button, Image } from 'antd';
import { Actions } from '../../context/ModalContext';
import { useModal } from '../../hooks/useModal';
import { Logo } from '../Logo/Logo';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
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
  const { updateModalType, state } = useModal();
  const { triggerDescription, movieContent } = state;

  const handleAddModal = (e) => {
    e.preventDefault();
    updateModalType(Actions.OPEN_MODAL_TO_ADD);
  };
  const handleCloseDescription = () => {
    updateModalType(Actions.CLOSE_DESCRIPTION);
  };

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
    </header>
  );
};
