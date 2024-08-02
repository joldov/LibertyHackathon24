'use client';

import { GridCol, GridRow } from '@lmig/lmds-react';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ children }) => (
  <GridRow vAlign="stretch" data-testid="mobile-menu">
    <GridCol className={styles.menuContainer} base={12}>
      {children}
    </GridCol>
  </GridRow>
);

export default MobileMenu;
