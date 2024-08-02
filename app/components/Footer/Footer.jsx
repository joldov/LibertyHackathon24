'use client';

import { Disclaimer, Footer as LMDSFooter } from '@lmig/lmds-react';
import styles from './Footer.module.css';

const Footer = () => (
  <LMDSFooter className={styles.footer} data-testid="footer">
    <hr className={styles.horizontalRule} />
    <Disclaimer>
      <p>
        &copy; {new Date().getFullYear()} Liberty Mutual Insurance Company, 175 Berkeley Street,
        Boston, MA 02116
      </p>
    </Disclaimer>
  </LMDSFooter>
);

export default Footer;
