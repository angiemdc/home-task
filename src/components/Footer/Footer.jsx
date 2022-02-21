import React from 'react';

import './Footer.modules.scss';

/**
 * Renders the main Footer of the APP
 * @param props.info All react elements to put inside the Footer
 * @returns
 */

export const Footer = ({ info }) => (
  <footer className='footer'>
    <p>{info}</p>
  </footer>
);
