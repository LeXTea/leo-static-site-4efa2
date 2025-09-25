import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { sdk } from '@farcaster/miniapp-sdk'

export default function Home() {
  sdk.actions.ready()
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi, I'm Leo Quach" />
        <p className="description">
          <a href="https://farcaster.xyz/lextea">
            Visit my Farcaster!
          </a>
        </p>
      </main>

      <Footer />
    </div>
  )
}