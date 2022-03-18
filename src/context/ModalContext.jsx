/* eslint-disable default-param-last */
import React, { useReducer, createContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext({});

export const Actions = {
  OPEN_MODAL_TO_EDIT: 'OPEN_MODAL_TO_EDIT',
  OPEN_MODAL_TO_ADD: 'OPEN_MODAL_TO_ADD',
  OPEN_MODAL_TO_DELETE: 'OPEN_MODAL_TO_DELETE',
  CLOSE_MODAL_TO_EDIT: 'CLOSE_MODAL_TO_EDIT',
  CLOSE_MODAL_TO_ADD: 'CLOSE_MODAL_TO_ADD',
  CLOSE_MODAL_TO_DELETE: 'CLOSE_MODAL_TO_DELETE',
  CLOSE_MODAL: 'TOGGLE_MODAL'
};

const initialState = {
  openAdd: false,
  openEdit: false,
  openDelete: false,
  title: '',
  openModal: false,
  movieContent: {
    datePicker: '',
    movieTitle: '',
    movieUrl: '',
    rating: '',
    genre: '',
    runtime: '',
    overview: ''
  }
};

const ManageModalReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case Actions.OPEN_MODAL_TO_EDIT:
      return {
        ...state,
        ...{
          openEdit: !state.openEdit,
          title: 'EDIT MOVIE',
          openModal: !state.openModal
        }
      };
    case Actions.CLOSE_MODAL_TO_EDIT:
      return {
        ...state,
        ...{ openEdit: !state.openEdit }
      };
    case Actions.OPEN_MODAL_TO_ADD:
      return {
        ...state,
        ...{
          openAdd: !state.openAdd,
          title: 'ADD MOVIE',
          openModal: !state.openModal
        }
      };
    case Actions.CLOSE_MODAL_TO_ADD:
      return {
        ...state,
        ...{ openAdd: !state.openAdd }
      };
    case Actions.OPEN_MODAL_TO_DELETE:
      return {
        ...state,
        ...{
          openDelete: !state.openDelete,
          title: 'DELETE MOVIE',
          openModal: !state.openModal
        }
      };
    case Actions.CLOSE_MODAL_TO_DELETE:
      return {
        ...state,
        ...{ openDelete: !state.openDelete }
      };
    case Actions.CLOSE_MODAL:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

/**
 * Component that creates the ModalContext provider
 * @param props.children All elements that will use the ModalContext capabilities
 * @returns Provider for the Model context
 */
export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ManageModalReducer, initialState);

  const updateModalType = useCallback((type) => {
    console.log(type);
    dispatch({ type });
  }, []);

  const Modal = useMemo(
    () => ({
      state,
      updateModalType
    }),
    [state, updateModalType]
  );

  return (
    <ModalContext.Provider value={Modal}>{children}</ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.element.isRequired
};
