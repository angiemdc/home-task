/* eslint-disable react/require-default-props */
/* eslint-disable default-param-last */
import React, { useReducer, createContext, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { actions, initialState, ManageMovieReducer } from './MovieReducer';

/**
 * Component that creates the MovieContext provider
 * @param props.children All elements that will use the MovieContext capabilities
 * @returns Provider for the Model context
 */

export const MovieContext = createContext({});

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ManageMovieReducer, initialState);

  const addEditMovieData = useCallback((type, object = {}) => {
    dispatch({ type, payload: object });
  }, []);

  const deletedMovie = useCallback((id = '') => {
    dispatch({ type: actions.TO_DELETE, payload: id });
  }, []);

  const openMovieDescription = useCallback(
    (id = '') => dispatch({ type: actions.OPEN_DESCRIPTION, payload: id }),
    []
  );

  const closeMovieDescription = useCallback(
    () => dispatch({ type: actions.CLOSE_DESCRIPTION }),
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
  children: PropTypes.element
};
