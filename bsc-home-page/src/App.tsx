import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import styled from 'styled-components';
import Header from './components/Header';
import ParallaxBanner from './components/ParallaxBanner';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './theme/ThemeProvider';

const Main = styled.main`
    padding: 20px;
    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const App = () => (
    <ThemeProvider>
        <ParallaxProvider>
            <Header />
            <ParallaxBanner />
            <Main>
                <About />
                <Services />
                <Portfolio />
                <Testimonials />
                <Blog />
                <Contact />
            </Main>
            <Footer />
        </ParallaxProvider>
    </ThemeProvider>
);

export default App;
