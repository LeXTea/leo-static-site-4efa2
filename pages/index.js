import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { sdk } from '@farcaster/miniapp-sdk'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    async function initSDK() {
      await sdk.actions.ready()
    }
    initSDK()
  }, [])
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