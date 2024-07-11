import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Services: React.FC = () => (
    <Box id="services" sx={{ py: 10 }}>
        <Box className="container">
            <Typography variant="h2" component="h2" gutterBottom>
                Serviços
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Desenvolvimento de Software Personalizado" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Consultoria em TI" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Integração de Sistemas" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Manutenção e Suporte" />
                </ListItem>
            </List>
        </Box>
    </Box>
);

export default Services;
