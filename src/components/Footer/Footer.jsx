import React from 'react';
import { Logo } from '../Logo/Logo';

import './Footer.modules.scss';

/**
 * Renders the main Footer of the APP
 * @param props.info All react elements to put inside the Footer
 * @returns
 */

export const Footer = () => (
  <footer className='footer' data-testid='footerComponent'>
    <Logo />
  </footer>
);
