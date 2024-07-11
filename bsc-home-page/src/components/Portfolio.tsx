import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Portfolio: React.FC = () => (
    <Box id="portfolio" sx={{ py: 10 }}>
        <Box className="container">
            <Typography variant="h2" component="h2" gutterBottom>
                Portfólio
            </Typography>
            <Typography variant="body1" component="p">
                Confira alguns de nossos projetos anteriores.
            </Typography>
            {/* Adicione aqui os exemplos de projetos */}
        </Box>
    </Box>
);

export default Portfolio;
