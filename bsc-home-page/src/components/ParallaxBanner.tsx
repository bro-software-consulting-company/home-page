import React, { useEffect, useMemo, useState, useContext } from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { useSpring, animated } from 'react-spring';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { ThemeContext } from '../theme/ThemeProvider';
import styled from 'styled-components';

const StyledParallaxBanner = styled(ParallaxBanner)`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
`;

const StyledParallaxBannerLayer = styled(ParallaxBannerLayer)`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
`;

const BannerForeground = styled(ParallaxBannerLayer)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: white;
    text-align: center;
    padding: 0 20px;
    box-sizing: border-box;
`;

const BannerContent = styled.div`
    z-index: 1;
    width: 100%;
`;

const BannerTitle = styled(animated.h1)`
    font-size: 3em;
    margin-bottom: 0.5em;
    
    @media (max-width: 768px) {
        font-size: 2em;
    }
`;

const BannerText = styled(animated.p)`
    font-size: 1.5em;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const Banner = () => {
    const [init, setInit] = useState(false);
    const { theme } = useContext(ThemeContext);

    // Initialize particles
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: theme === 'light' ? '#0d47a1' : '#212121',
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push',
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse',
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: '#ffffff',
                },
                links: {
                    color: '#ffffff',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.out,
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [theme],
    );

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    });

    const slideIn = useSpring({
        from: { transform: 'translateY(50px)' },
        to: { transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    return (
        <StyledParallaxBanner>
            <StyledParallaxBannerLayer speed={-20}>
                {init && (
                    <Particles
                        id="tsparticles"
                        particlesLoaded={particlesLoaded}
                        options={options}
                    />
                )}
            </StyledParallaxBannerLayer>
            <BannerForeground speed={-10}>
                <BannerContent>
                    <BannerTitle style={fadeIn}>Bem-vindo à Bro Software Consulting</BannerTitle>
                    <BannerText style={slideIn}>Solucionamos seus problemas com soluções de software inovadoras e eficazes.</BannerText>
                </BannerContent>
            </BannerForeground>
        </StyledParallaxBanner>
    );
};

export default Banner;
