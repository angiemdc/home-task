import React from 'react';
import { Tabs } from 'antd';
import { MovieCards } from '../MovieCards/MovieCards';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
// TODO: defend how to mock  a sync data
import { movieData } from '../../mock_data';

import 'antd/dist/antd.css';
import './TabsMovies.modules.scss';

const { TabPane } = Tabs;
export const TabsMovies = () => {
  const tabsContent = [
    { name: 'All', tabId: '1' },
    { name: 'Documentary', tabId: '2' },
    { name: 'Comedy', tabId: '3' },
    { name: 'Horror', tabId: '4' },
    { name: 'crime', tabId: '5' }
  ];
  return (
    <Tabs defaultActiveKey='1'>
      {tabsContent.map(({ name, tabId }) => {
        return (
          <TabPane tab={name} key={tabId}>
            <ErrorBoundary>
              <MovieCards movieData={movieData} />
            </ErrorBoundary>
          </TabPane>
        );
      })}
    </Tabs>
  );
};
