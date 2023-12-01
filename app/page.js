"use client";

import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (<>
    <main className={styles.main}>
      <text>Hello, anonymous user.</text>
      <Link href="/jokes">
      <div className={styles.main}>
        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Enter here
          </h2>
          <p>There's no turning back.</p>
        </a>
        </div>
        </Link>
    </main>
    </>
  )
}
