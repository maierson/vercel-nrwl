import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vercel Deploy</title>
      </Head>
      <div className="app">
        <header className="flex" style={{ fontSize: '40px' }}>
          Intro
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
