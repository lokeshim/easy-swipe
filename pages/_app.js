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
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        AOS.init({
            duration: 800, // Duration of animations
            once: true, // Whether animation should happen only once
        });
    }, []);

    // Conditionally import the calculator CSS
    useEffect(() => {
        if (router.pathname === '/calculator') {
            import('../styles/calc.css');
        }
         if (typeof document !== 'undefined') {
            require('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, [router.pathname]);

    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <CommonModal />
        </>
    );
}

export default MyApp;
