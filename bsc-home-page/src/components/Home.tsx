import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from './Slider';

const Home: React.FC = () => (
    <Box id="home" sx={{ background: 'linear-gradient(135deg, #ff6347, #2196f3)', color: '#fff', py: 10 }}>
        <Box className="container">
            <Typography variant="h2" component="h2" gutterBottom>
                Bem-vindo à Bro Software Consulting
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
                Solucionamos seus problemas com soluções de software inovadoras e eficazes.
            </Typography>
            <Slider />
        </Box>
    </Box>
);

export default Home;
