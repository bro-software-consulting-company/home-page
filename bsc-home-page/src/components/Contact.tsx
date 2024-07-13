import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
`;

const Input = styled.input`
    margin: 10px 0;
    padding: 10px;
    font-size: 1em;
`;

const TextArea = styled.textarea`
    margin: 10px 0;
    padding: 10px;
    font-size: 1em;
`;

const Button = styled.button`
    margin-top: 20px;
    padding: 10px;
    font-size: 1em;
    background-color: #0d47a1;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0c3e91;
    }
`;

const Contact = () => (
    <ContactSection id="contact">
        <Container>
            <Title>Contato</Title>
            <Form>
                <Input type="text" placeholder="Nome" required />
                <Input type="email" placeholder="Email" required />
                <TextArea placeholder="Mensagem" rows={4} required />
                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    </ContactSection>
);

export default Contact;
