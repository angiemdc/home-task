import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

/**
 * Hook to open modal  with Add, Edit and Deleted
 * @returns Modal object
 */
export const useMovieData = () => useContext(MovieContext);
