import { useEffect } from 'react';
import "@/styles/globals.css";
import Head from 'next/head';
import localFont from 'next/font/local';

const montreal = localFont({
  src: [{ path: './fonts/neuemontreal.woff', weight: '400' }],
  style:'normal',
  display:'swap',
  variable: '--font-montreal'
});

const avenir = localFont({
  src: [{ path: './fonts/avenir.woff',
   weight: '400' }],
   style:'normal',
   display:'swap',
  variable: '--font-avenir'
});
const avenirMedium = localFont({
  src: [{ path: './fonts/avenir-medium.woff', weight: '500' }],
  style:'normal',
  display:'swap',
  variable: '--font-avenir'
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll({
        lenisOptions: {
          duration: 1.2,
        }
      });
    })();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0" />
        <title>DMTCA - Landing Page</title>
        <meta name="description" content="DMTCA - Real Estate Landing Page" />
      </Head>
      <main
        className={`${montreal.variable} ${avenir.variable} ${avenirMedium.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
