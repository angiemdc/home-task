import React, { Suspense, lazy } from 'react';

import {
  Footer,
  Header,
  Search,
  ErrorBoundary,
  Layout
} from '../../components';

const TabsMovies = lazy(() =>
  import('../../components').then((module) => ({
    default: module.TabsMovies
  }))
);

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
      <Suspense fallback={<div>Loading...</div>}>
        <TabsMovies />
      </Suspense>
    </Layout>
    <Footer />
  </div>
);
