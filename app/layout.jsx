'use client';

import { Content } from '@lmig/lmds-react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/globals.css';
import Main from './Main/main';

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="evolved">
      <head>
        <title>React NextJS Pattern</title>
      </head>
      <body>
        <noscript>
          If you&apos;re seeing this message, that means
          <strong>JavaScript has been disabled on your browser</strong>, please
          <strong>enable JS</strong> to make this app work.
        </noscript>
        <div id="app" className="lm-app">
          <Header />
          <Main />

          {/* <Content>{children}

          </Content> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
