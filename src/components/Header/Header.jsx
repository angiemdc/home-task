/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';

import { Button, Image } from 'antd';
import { Actions } from '../../context/ModalContext';
import { useModal } from '../../hooks/useModal';
import { Logo } from '../Logo/Logo';
import { Search } from '../Search/Search';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { MovieDescription } from '../MovieDescription/MovieDescription';
import sButton from '../../assets/images/searchButton.svg';
import './Header.modules.scss';

export const Header = () => {
  const { updateModalType, state } = useModal();
  const { triggerDescription, movieContent } = state;
  console.log(movieContent);

  const handleAddModal = (e) => {
    e.preventDefault();
    updateModalType(Actions.OPEN_MODAL_TO_ADD);
  };
  const handleCloseDescription = useCallback(() => {
    updateModalType(Actions.CLOSE_DESCRIPTION);
  }, [updateModalType]);

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
          <button type='button' className='btn' onClick={handleAddModal}>
            + ADD MOVIE
          </button>
        )}
      </div>
      <ErrorBoundary>
        {triggerDescription ? (
          <MovieDescription {...movieContent} />
        ) : (
          <Search />
        )}
      </ErrorBoundary>
    </header>
  );
};
