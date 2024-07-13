import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
`;

const FooterText = styled.p`
    margin: 0;
    font-size: 1em;
`;

const Footer = () => (
    <FooterContainer>
        <FooterText>&copy; 2024 Bro Software Consulting. Todos os direitos reservados.</FooterText>
    </FooterContainer>
);

export default Footer;
