import React from 'react';
import { MovieProvider } from './context/MovieContext';

import { Home } from './pages/Home/Home';

import './assets/styles/main.scss';

const App = () => (
  <MovieProvider>
    <Home />
  </MovieProvider>
);

export default App;
