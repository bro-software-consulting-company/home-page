import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
    padding: 20px;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
`;

const Title = styled.h2`
    font-size: 2em;
    margin-bottom: 0.5em;
`;

const Text = styled.p`
    font-size: 1.2em;
    line-height: 1.5;
`;

const About = () => (
    <AboutSection id="about">
        <Container>
            <Title>Sobre Nós</Title>
            <Text>Bro Software Consulting é uma empresa dedicada a fornecer soluções de software de alta qualidade. Nossa equipe de especialistas está pronta para ajudar você a alcançar seus objetivos tecnológicos.</Text>
        </Container>
    </AboutSection>
);

export default About;
