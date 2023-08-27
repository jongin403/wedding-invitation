import './globals.css';

import React from 'react';

import GlobalNavigation from '../components/GlobalNavigation';
import Footer from '../components/Footer';
import '../styles/init.scss';
import styles from './Home.module.scss';

export const metadata = {
  title: '청첩장',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalNavigation />
        <div className={styles.HomeLayoutWrap}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
