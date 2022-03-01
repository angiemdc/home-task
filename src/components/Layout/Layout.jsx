import React from 'react';
import PropTypes from 'prop-types';

import './Layout.modules.scss';

/**
 * Renders the main layout of the APP
 * @param props.children All react elements to put inside the layout
 * @returns
 */

export const Layout = ({ children }) => (
  <main className='main'>{children}</main>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};
