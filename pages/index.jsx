import Head from 'next/head'
import Image from 'next/image'
import { Body } from '../components/Body/Body'
import { Header } from '../components/Header/Header'
import { Sidebar } from '../components/Sidebar/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <>
      <Head>
        <title>Netwatch watchlist | Dashboard</title>
        <meta name="description" content="My Watchlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <Header />
        </div>
        <div className={styles.mainContent}>
          <Sidebar />
          <Body />
        </div>
      </main>
    </>
  )
}
