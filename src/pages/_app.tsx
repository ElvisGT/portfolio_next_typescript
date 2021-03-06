import { useEffect } from 'react';
import {AppProps} from 'next/app';
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head';
import '@static/css/globals.css';

function MyApp({Component}:AppProps) {
    useEffect(() => {
      AOS.init(
        {
          startEvent: 'DOMContentLoaded',
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          delay: 0,
          offset:20,
        }
      );
    }, []);
  return (
      <>
        <Head>
          <title>Portfolio de Elvis</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         
        </Head>
        <Component />
      </>
  );
}

export default MyApp;
