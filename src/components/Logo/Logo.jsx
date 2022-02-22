import React from 'react';

import { ReactComponent as LogoCompany } from '../../assets/images/netflixroulette.svg';

import styles from './Logo.modules.scss';

/**
 * Renders the main Logo of the APP
 * @param props.children All react elements to put inside the Logo

 * @returns
 */

export const Logo = () => {
  return (
    <div className={styles.logoImg}>
      <img src={LogoCompany} alt='logo' />
    </div>
  );
};
