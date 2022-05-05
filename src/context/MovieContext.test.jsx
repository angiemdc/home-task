import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { MovieProvider, MovieContext } from './MovieContext';
import { useMovieData } from '../hooks/useMovieData';
import { movieData } from '../mock_data';

const state = {
  triggerDescription: false,
  id: '',
  moviesData: movieData,
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
const dispatch = jest.fn();

const wrapper = ({ children }) => (
  <MovieContext.Provider value={{ state, dispatch }}>
    {children}
  </MovieContext.Provider>
);

const mockUseContext = jest
  .fn()
  .mockImplementation(() => ({ state, dispatch }));

React.useContext = mockUseContext;

describe('useMovieData test', () => {
  it('should return  inicial data with its state and dispatch function', () => {
    render(
      <MovieProvider>
        <div>hola</div>
      </MovieProvider>
    );
    const { result } = renderHook(() => useMovieData(), { wrapper });

    console.log(result.current);

    expect(result.current.state.moviesData.length).toBe(0);
    expect(result.current).toEqual({ state, dispatch });
  });
});
