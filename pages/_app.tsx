import type { AppProps } from 'next/app'
import Header from 'components/common/Header'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
