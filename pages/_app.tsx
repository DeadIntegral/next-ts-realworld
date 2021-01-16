import type { AppProps } from 'next/app'
import Header from 'components/common/Header'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Conduit</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
