import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
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

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    font-size: 1.2em;
    line-height: 1.5;
    margin-bottom: 10px;
`;

const Services = () => (
    <ServicesSection id="services">
        <Container>
            <Title>Serviços</Title>
            <List>
                <ListItem>Desenvolvimento de Software Personalizado</ListItem>
                <ListItem>Consultoria em TI</ListItem>
                <ListItem>Integração de Sistemas</ListItem>
                <ListItem>Manutenção e Suporte</ListItem>
            </List>
        </Container>
    </ServicesSection>
);

export default Services;
