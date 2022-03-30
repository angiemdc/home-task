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
  CLOSE_MODAL: 'TOGGLE_MODAL',
  OPEN_DESCRIPTION: 'OPEN_DESCRIPTION',
  CLOSE_DESCRIPTION: 'CLOSE_DESCRIPTION'
};

const initialState = {
  openAdd: false,
  openEdit: false,
  openDelete: false,
  title: '',
  openModal: false,
  triggerDescription: false,
  id: '',
  editContent: {
    description: '',
    id: '',
    image: '',
    movieType: '',
    name: '',
    rating: '',
    runtime: '',
    year: ''
  },
  movieContent: {
    datePicker: '',
    movieTitle: '',
    movieUrl: '',
    rating: '',
    genre: '',
    runtime: '',
    overview: '',
    description: '',
    id: '',
    image: '',
    year: '',
    name: '',
    movieType: ''
  }
};

const ManageModalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case Actions.OPEN_MODAL_TO_EDIT:
      return {
        ...state,
        ...{ editContent: payload },
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
          openModal: !state.openModal,
          id: payload
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
    case Actions.OPEN_DESCRIPTION:
      return {
        ...state,
        ...{ triggerDescription: !state.triggerDescription },
        ...{ movieContent: payload }
      };
    case Actions.CLOSE_DESCRIPTION:
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

  const updateModalType = useCallback((type, object = {}) => {
    dispatch({ type, payload: object });
  }, []);

  const deletedMovie = useCallback((id = '') => {
    dispatch({ type: Actions.OPEN_MODAL_TO_DELETE, payload: id });
  }, []);

  const openMovieDescription = useCallback(
    (object) => dispatch({ type: Actions.OPEN_DESCRIPTION, payload: object }),
    []
  );

  const Modal = useMemo(
    () => ({
      state,
      updateModalType,
      deletedMovie,
      openMovieDescription
    }),
    [state, updateModalType, openMovieDescription, deletedMovie]
  );

  return (
    <ModalContext.Provider value={Modal}>{children}</ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.element.isRequired
};
