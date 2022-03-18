import React from 'react';
import PropTypes from 'prop-types';
import { Actions } from '../../context/ModalContext';
import { useModal } from '../../hooks/useModal';
import { Logo } from '../Logo/Logo';
import './Header.modules.scss';

export const Header = ({ children }) => {
  const { updateModalType } = useModal();

  const handleAddModal = (e) => {
    e.preventDefault();
    console.log(Actions.OPEN_MODAL_TO_ADD);
    updateModalType(Actions.OPEN_MODAL_TO_ADD);
  };
  return (
    <header className='header'>
      <div className='navSection'>
        <Logo />
        <button type='button' className='btn' onClick={handleAddModal}>
          + ADD MOVIE
        </button>
      </div>
      <div>{children}</div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.element.isRequired
};
