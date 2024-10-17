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
            duration: 3.5
          }
        });
      }
    )()
  }, []);

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, max-scale=2" />
        <title>DMTCA - Landing Page</title>
        <meta name="description" content="DMTCA - Real Estate Landing Page"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
