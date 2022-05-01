import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';

import { Home, ErrorPage } from './pages';

import './assets/styles/main.scss';

const App = () => (
  <MovieProvider>
    <Routes>
      <Route path='/' element={<Navigate to='/search' replace />} />
      <Route path='/search' element={<Home />} />
      <Route path='/search/:searchQuery' element={<Home />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  </MovieProvider>
);

export default App;
