import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Blog: React.FC = () => (
    <Box id="blog" sx={{ py: 10 }}>
        <Box className="container">
            <Typography variant="h2" component="h2" gutterBottom>
                Blog
            </Typography>
            <Typography variant="body1" component="p">
                Leia nossos artigos e notícias mais recentes.
            </Typography>
            {/* Adicione aqui os artigos do blog */}
        </Box>
    </Box>
);

export default Blog;
