import React from 'react';
import { useLocation } from 'react-router-dom';

import { Footer, Layout, MovieDescription } from '../../components';

export const MoviePage = () => {
  const {
    state: { movieData }
  } = useLocation();
  return (
    <div>
      <Layout>
        <MovieDescription movieContent={movieData} />
      </Layout>
      <Footer />
    </div>
  );
};
