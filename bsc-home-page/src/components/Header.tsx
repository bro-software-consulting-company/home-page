import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link as ScrollLink } from 'react-scroll';
import Switch from '@mui/material/Switch';
import { ThemeContext } from '../theme/ThemeProvider';

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const { toggleTheme, theme } = useContext(ThemeContext);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Bro Software Consulting
                </Typography>
                <Switch checked={theme === 'dark'} onChange={toggleTheme} />
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ScrollLink to="about" smooth={true} duration={500}>Sobre</ScrollLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ScrollLink to="services" smooth={true} duration={500}>Serviços</ScrollLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ScrollLink to="portfolio" smooth={true} duration={500}>Portfólio</ScrollLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ScrollLink to="testimonials" smooth={true} duration={500}>Depoimentos</ScrollLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ScrollLink to="blog" smooth={true} duration={500}>Blog</ScrollLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ScrollLink to="contact" smooth={true} duration={500}>Contato</ScrollLink>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
