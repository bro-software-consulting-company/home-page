import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Testimonials: React.FC = () => (
    <Box id="testimonials" sx={{ py: 10 }}>
        <Box className="container">
            <Typography variant="h2" component="h2" gutterBottom>
                Depoimentos
            </Typography>
            <Typography variant="body1" component="p">
                Veja o que nossos clientes dizem sobre nós.
            </Typography>
            {/* Adicione aqui os depoimentos dos clientes */}
        </Box>
    </Box>
);

export default Testimonials;
