import React from 'react';

// import { Footer, ErrorBoundary, Header, Search } from '../../Components';
import {
  Footer,
  Header,
  Search,
  ErrorBoundary,
  Layout,
  TabsMovies
} from '../../Components';
// import styles from './Home.modules.scss';

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
