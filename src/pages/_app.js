import { useEffect } from 'react'
import "@/styles/globals.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll({
          lenisOptions: {
            duration: 1.2,
            // syncTouch: true,
          }
        });
      }
    )()
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0" />
        <title>DMTCA - Landing Page</title>
        <meta name="description" content="DMTCA - Real Estate Landing Page" />
        <link rel='preload' href="/fonts/neuemontreal.woff" as="font" type="font/woff" crossOrigin="anonymous"></link>
        <link rel='preload' href="/fonts/avenir.woff" as="font" type="font/woff" crossOrigin="anonymous"></link>
        <link rel='preload' href="/fonts/avenir-medium.woff" as="font" type="font/woff" crossOrigin="anonymous"></link>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
