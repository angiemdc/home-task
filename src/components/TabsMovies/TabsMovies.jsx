import React from 'react';

import { Tabs } from 'antd';

import 'antd/dist/antd.css';
import './TabsMovies.modules.scss';

export const TabsMovies = () => {
  const { TabPane } = Tabs;
  const tabsContent = [
    { name: 'All', tabId: 'All1' },
    { name: 'Documentary', tabId: 'Documentary1' },
    { name: 'Comedy', tabId: 'Comedy1' },
    { name: 'Horror', tabId: 'Horror1' },
    { name: 'crime', tabId: 'crime1' }
  ];
  return (
    <Tabs defaultActiveKey='1'>
      {/* <TabPane tab='All' key='1'>
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab='Documentary' key='2'>
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab='Comedy' key='3'>
        Content of Tab Pane 3
      </TabPane> */}
      {tabsContent.map((tab) => {
        const { name, tabId } = tab;
        return (
          <TabPane tab={name} key={tabId}>
            Content of Tab {name}
          </TabPane>
        );
      })}
    </Tabs>
  );
};
