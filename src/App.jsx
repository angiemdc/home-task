import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';

import { Home, ErrorPage } from './pages';

import './assets/styles/main.scss';

const App = () => (
  <MovieProvider>
    <Routes>
      <Route path='*' element={<ErrorPage />} />
      <Route path='/search' element={<Home />} />
      <Route path='/' element={<Navigate to='/search' replace />} />
      <Route path='/search' element={<Home />} />
      <Route path='/movie/:movieId' element={<Home />} />
    </Routes>
  </MovieProvider>
);

export default App;
