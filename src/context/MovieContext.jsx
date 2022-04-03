/* eslint-disable default-param-last */
import React, { useReducer, createContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';

import { movieData } from '../mock_data';

export const MovieContext = createContext({});

export const Actions = {
  TO_EDIT: 'TO_EDIT',
  TO_ADD: 'TO_ADD',
  TO_DELETE: 'TO_DELETE',
  OPEN_DESCRIPTION: 'OPEN_DESCRIPTION',
  CLOSE_DESCRIPTION: 'CLOSE_DESCRIPTION'
};

const initialState = {
  triggerDescription: false,
  id: '',
  moviesData: cloneDeep(movieData),
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
  const arrayToModify = cloneDeep(state.moviesData);
  switch (type) {
    case Actions.TO_EDIT: {
      return {
        ...state,
        ...{
          movieData: arrayToModify.map((movie) => {
            if (movie.id === payload.id) {
              return payload;
            }
            return movie;
          })
        }
      };
    }
    case Actions.TO_ADD: {
      const generateId = payload?.title?.toLowerCase().substring(0, 3);
      const newPayload = { ...payload, id: generateId };

      return {
        ...state,
        ...{ movieData: arrayToModify.push({ ...newPayload, id: generateId }) }
      };
    }
    case Actions.TO_DELETE:
      return {
        ...state,
        ...{ movieData: arrayToModify.filter(({ id }) => id !== payload) }
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
 * Component that creates the MovieContext provider
 * @param props.children All elements that will use the MovieContext capabilities
 * @returns Provider for the Model context
 */
export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ManageModalReducer, initialState);

  const AddEditMovieData = useCallback((type, object = {}) => {
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
      AddEditMovieData,
      deletedMovie,
      openMovieDescription
    }),
    [state, AddEditMovieData, openMovieDescription, deletedMovie]
  );

  return (
    <MovieContext.Provider value={Modal}>{children}</MovieContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.element.isRequired
};
