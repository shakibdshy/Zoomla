// import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from './home'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Zoomla | Video Conference Meeting and Real Time Chat</title>
        <meta name="description" content="Video Conference Meeting and Real Time Chat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  )
}

export default Home
