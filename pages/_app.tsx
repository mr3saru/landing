import type { AppProps } from 'next/app'
import Head from 'next/head'
import '@styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mr Saru</title>
        <meta name="description" content="Mr Saru software house" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
