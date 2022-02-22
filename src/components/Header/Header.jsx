import React from 'react';

import styles from './Header.modules.scss';

/**
 * Renders the main Header of the APP
 * @param props.children All react elements to put inside the Header
 * @returns
 */

export const Header = ({ children }) => {
  return (
    <Header className={styles.header}>
      <div className={styles.navSection}>
        <button type='submit'>+ ADD MOVIE</button>
      </div>
      <div>{children}</div>
    </Header>
  );
};
