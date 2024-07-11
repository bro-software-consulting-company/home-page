import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About: React.FC = () => (
    <Box id="about" sx={{ py: 10 }}>
        <Box className="container">
            <Typography variant="h2" component="h2" gutterBottom>
                Sobre Nós
            </Typography>
            <Typography variant="body1" component="p">
                Bro Software Consulting é uma empresa dedicada a fornecer soluções de software de alta qualidade. Nossa equipe de especialistas está pronta para ajudar você a alcançar seus objetivos tecnológicos.
            </Typography>
        </Box>
    </Box>
);

export default About;
