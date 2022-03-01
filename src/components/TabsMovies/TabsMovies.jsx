import React from 'react';
import { Tabs } from 'antd';

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
            Content of Tab {name}
          </TabPane>
        );
      })}
    </Tabs>
  );
};
