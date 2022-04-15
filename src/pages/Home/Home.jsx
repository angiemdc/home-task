import React from 'react';
import { Footer, Header, Layout, TabsMovies } from '../../components';

/**
 * Renders the main Home of the APP
 * @returns
 */

export const Home = () => {
  return (
    <div>
      <Header />
      <Layout>
        <TabsMovies />
      </Layout>
      <Footer />
    </div>
  );
};
