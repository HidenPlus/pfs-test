import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/global.styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link href="https://fonts.cdnfonts.com/css/gotham" rel="stylesheet" />
      <link rel="icon" href="https://pfsrealty.com/wp-content/uploads/2021/12/cropped-logo-palmera-150x150.png" sizes="32x32" />
      <link rel="icon" href="https://pfsrealty.com/wp-content/uploads/2021/12/cropped-logo-palmera.png" sizes="192x192" />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        type="text/javascript"
        src={
          "https://maps.googleapis.com/maps/api/js?key=" +
          process.env.NEXT_PUBLIC_MAPS_API +
          "&libraries=places"
        }
      ></script>
      <title>
        {pageProps.title}
      </title>
      <meta name="description" content={pageProps.description} />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}
