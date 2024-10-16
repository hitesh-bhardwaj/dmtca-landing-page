import { useEffect } from 'react'
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll({
            lenisOptions: {
              duration: 2,
            }
          });
      }
    )()
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
