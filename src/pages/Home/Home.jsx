import React from 'react';

import {
  Footer,
  Header,
  Search,
  ErrorBoundary,
  Layout,
  TabsMovies
} from '../../components';

/**
 * Renders the main Home of the APP
 * @returns
 */

export const Home = () => (
  <div>
    <Header>
      <ErrorBoundary>
        <Search details={[]} />
      </ErrorBoundary>
    </Header>
    <Layout>
      <TabsMovies />
    </Layout>
    <Footer />
  </div>
);
