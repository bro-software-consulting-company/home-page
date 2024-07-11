import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact: React.FC = () => (
    <Box id="contact" sx={{ py: 10 }}>
        <Box className="container">
            <Typography variant="h2" component="h2" gutterBottom>
                Contato
            </Typography>
            <Box
                component="form"
                id="contact-form"
                action="#"
                method="post"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 600,
                    mx: 'auto'
                }}
            >
                <TextField
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                    required
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    type="email"
                    required
                />
                <TextField
                    label="Mensagem"
                    variant="outlined"
                    margin="normal"
                    required
                    multiline
                    rows={4}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                >
                    Enviar
                </Button>
            </Box>
        </Box>
    </Box>
);

export default Contact;
