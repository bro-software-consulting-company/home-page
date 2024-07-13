import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
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

const Testimonials = () => (
    <TestimonialsSection id="testimonials">
        <Container>
            <Title>Depoimentos</Title>
            <Text>Veja o que nossos clientes dizem sobre nós.</Text>
            {/* Adicione aqui os depoimentos dos clientes */}
        </Container>
    </TestimonialsSection>
);

export default Testimonials;
