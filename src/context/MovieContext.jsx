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
    title: '',
    movieType: '',
    id: '',
    image: '',
    year: '',
    rating: '',
    runtime: '',
    description: ''
  }
};

const ManageMovieReducer = (state, action) => {
  const { type, payload } = action;
  const arrayToModify = cloneDeep(state.moviesData);
  switch (type) {
    case Actions.TO_EDIT: {
      return {
        ...state,
        ...{
          moviesData: arrayToModify.map((movie) => {
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

      return {
        ...state,
        ...{
          moviesData: [...state.moviesData, { ...payload, id: generateId }]
        }
      };
    }
    case Actions.TO_DELETE:
      return {
        ...state,
        ...{ moviesData: arrayToModify.filter(({ id }) => id !== payload) }
      };

    case Actions.OPEN_DESCRIPTION: {
      const filteredMovie = arrayToModify.filter(({ id }) => id === payload);
      return {
        ...state,
        ...{ triggerDescription: !state.triggerDescription },
        ...{ movieContent: filteredMovie?.[0] }
      };
    }
    case Actions.CLOSE_DESCRIPTION: {
      return {
        ...state,
        ...{ triggerDescription: !state.triggerDescription }
      };
    }
    default:
      return state;
  }
};

/**
 * Component that creates the MovieContext provider
 * @param props.children All elements that will use the MovieContext capabilities
 * @returns Provider for the Model context
 */
export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ManageMovieReducer, initialState);

  const addEditMovieData = useCallback((type, object = {}) => {
    dispatch({ type, payload: object });
  }, []);

  const deletedMovie = useCallback((id = '') => {
    dispatch({ type: Actions.TO_DELETE, payload: id });
  }, []);

  const openMovieDescription = useCallback(
    (id = '') => dispatch({ type: Actions.OPEN_DESCRIPTION, payload: id }),
    []
  );

  const closeMovieDescription = useCallback(
    () => dispatch({ type: Actions.CLOSE_DESCRIPTION }),
    []
  );

  const movieContextValue = useMemo(
    () => ({
      state,
      addEditMovieData,
      deletedMovie,
      openMovieDescription,
      closeMovieDescription
    }),
    [
      state,
      addEditMovieData,
      openMovieDescription,
      deletedMovie,
      closeMovieDescription
    ]
  );

  return (
    <MovieContext.Provider value={movieContextValue}>
      {children}
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropTypes.element.isRequired
};
