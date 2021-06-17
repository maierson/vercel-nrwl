import Link from 'next/link';
import React from 'react';
import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <Link href="/test">
        <button className="main-button">Test</button>
      </Link>
      <Link href="/best">
        <button className="main-button">Best</button>
      </Link>
    </div>
  );
}

export default Index;
