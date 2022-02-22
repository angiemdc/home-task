import React from 'react';

import './Layout.modules.scss';

/**
 * Renders the main layout of the APP
 * @param props.children All react elements to put inside the layout
 * @returns
 */

export const Layout = ({ children }) => (
  <main className='main'>{children}</main>
);
