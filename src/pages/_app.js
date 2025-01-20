import { useEffect } from 'react';
import "@/styles/globals.css";
import Head from 'next/head';
import localFont from 'next/font/local';
import { useRouter } from "next/router";
import { appWithTranslation } from 'next-i18next'

const montreal = localFont({
  src: [{ path: './fonts/neuemontreal.woff', weight: '400' }],
  style: 'normal',
  display: 'swap',
  variable: '--font-montreal'
});

const avenir = localFont({
  src: [{
    path: './fonts/avenir.woff',
    weight: '400'
  }],
  style: 'normal',
  display: 'swap',
  variable: '--font-avenir'
});
const avenirMedium = localFont({
  src: [{ path: './fonts/avenir-medium.woff', weight: '500' }],
  style: 'normal',
  display: 'swap',
  variable: '--font-avenir'
});

const App = ({ Component, pageProps }) => {

  const { locale } = useRouter();

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
    document.querySelectorAll('Swiper').forEach(swiper => {
      swiper.setAttribute("dir", dir);
    });
  }, [locale]);

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

export default appWithTranslation(App);