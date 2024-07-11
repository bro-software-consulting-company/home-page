import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './theme/ThemeProvider';
import Container from '@mui/material/Container';

const App: React.FC = () => (
    <ThemeProvider>
        <Header />
        <Container component="main">
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Blog />
            <Contact />
        </Container>
        <Footer />
    </ThemeProvider>
);

export default App;
