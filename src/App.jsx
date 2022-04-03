import React from 'react';
import { ModalProvider } from './context/MovieContext';

import { Home } from './pages/Home/Home';

import './assets/styles/main.scss';

const App = () => (
  <ModalProvider>
    <Home />
  </ModalProvider>
);

export default App;
