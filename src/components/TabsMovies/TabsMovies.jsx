import React from 'react';
import { Tabs } from 'antd';
import { MovieCards } from '../MovieCards/MovieCards';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { useMovieData } from '../../hooks/useMovieData';
import { tabsContent } from '../../mock_data';

import './TabsMovies.modules.scss';

const { TabPane } = Tabs;
export const TabsMovies = () => {
  const {
    state: { moviesData }
  } = useMovieData();

  return (
    <Tabs defaultActiveKey='1'>
      {tabsContent.map(({ name, tabId }) => {
        return (
          <TabPane tab={name} key={tabId}>
            <ErrorBoundary>
              <MovieCards moviesData={moviesData} />
            </ErrorBoundary>
          </TabPane>
        );
      })}
    </Tabs>
  );
};
