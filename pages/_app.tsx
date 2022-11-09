import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { GlobalStyle } from '../styles/global.styles'
import {store} from "../app/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link href="https://fonts.cdnfonts.com/css/gotham" rel="stylesheet" />
      <link rel="icon" href="https://pfsrealty.com/wp-content/uploads/2021/12/cropped-logo-palmera-150x150.png" sizes="32x32" />
      <link rel="icon" href="https://pfsrealty.com/wp-content/uploads/2021/12/cropped-logo-palmera.png" sizes="192x192" />
      <title>
        {pageProps.title}
      </title>
      <meta name="description" content={pageProps.description} />
    </Head>
    <GlobalStyle />
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </>
  )
}
