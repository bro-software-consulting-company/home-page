import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => (
    <Box component="footer" sx={{ backgroundColor: '#333', color: '#fff', py: 2 }}>
        <Box className="container">
            <Typography variant="body2" component="p" align="center">
                &copy; 2024 Bro Software Consulting. Todos os direitos reservados.
            </Typography>
        </Box>
    </Box>
);

export default Footer;
