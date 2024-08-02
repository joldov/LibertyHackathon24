'use client';

import { Button, Heading, GridRow, GridCol } from '@lmig/lmds-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './not-found.module.css';
import notFound from '../public/images/not-found/404.png';

const NotFound = () => (
  <>
    <GridRow gutters gutterSize="fixed-16" vAlign="middle">
      <GridCol base={12} className={styles.imageColumn}>
        <Image src={notFound} alt="Page Not Found" />
      </GridCol>
    </GridRow>
    <GridRow gutters gutterSize="fixed-16" vAlign="middle">
      <GridCol base={12} className={styles.textColumn}>
        <Heading type="h2-light">{"We can't seem to find the page you're looking for."}</Heading>
        <Link href="/" data-testid="home-link">
          <Button variant="primary" align="center" data-testid="home-button">
            Return Home
          </Button>
        </Link>
      </GridCol>
    </GridRow>
  </>
);

export default NotFound;
