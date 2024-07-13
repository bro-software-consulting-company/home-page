import React from 'react';
import styled from 'styled-components';

const BlogSection = styled.section`
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

const Blog = () => (
    <BlogSection id="blog">
        <Container>
            <Title>Blog</Title>
            <Text>Leia nossos artigos e notícias mais recentes.</Text>
            {/* Adicione aqui os artigos do blog */}
        </Container>
    </BlogSection>
);

export default Blog;
