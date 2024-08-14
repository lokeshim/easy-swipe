// pages/_app.js
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/style.css'; // Import global CSS
import Header from '../components/Header';
import Footer from '../components/Footer';
import CommonModal from '../components/CommonModal';

function MyApp({ Component, pageProps }) {  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then((Bootstrap) => {
      // Initialize Bootstrap carousel (if necessary)
    });
  }, []);
  return (
    <>
      <Header />      
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <CommonModal />
    </>
  );
}

export default MyApp;
