import { useEffect } from 'react';
import AOS from "aos";
import {Header} from '@components/Header/Header';
import {Footer} from '@components/Footer/Footer';
import { Home } from '@containers/Home/Home';
import {Services} from '@containers/Services/Services';
import {Portfolio} from '@containers/Portfolio/Portfolio';
import {Blog} from '@containers/Blog/Blog';
import "aos/dist/aos.css";
import Head from 'next/head';
import '@static/css/globals.css';

function MyApp() {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
      <>
        <Head>
          <title>Portfolio de Elvis</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* --Icono-- */}
          <link rel="shortcut icon" href="https://i.ibb.co/tpck5y3/icons8-portafolio-32.png" />
          
         
        </Head>
        <Header />
        <Home />
        <Services />
        <Portfolio />
        <Blog />
        <Footer />
      </>
  );
}

export default MyApp;
