import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { ThemeContext } from '../theme/ThemeProvider';
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu';

const AppBar = styled.header`
    position: sticky;
    top: 0;
    background-color: #333;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
`;

const Title = styled.h1`
    font-size: 1.5em;
    margin: 0;
`;

const MenuButton = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.5em;
`;

const Menu = styled.nav<{ open: boolean }>`
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: absolute;
    top: 50px;
    right: 20px;
    background-color: #333;
    border: 1px solid #444;
    border-radius: 4px;
    padding: 10px;
`;

const MenuItem = styled(ScrollLink)`
    display: block;
    padding: 10px;
    color: white;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: #444;
    }
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { toggleTheme, theme } = useContext(ThemeContext);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <AppBar>
            <Title>Bro Software Consulting</Title>
            <div>
                <Switch checked={theme === 'dark'} onChange={toggleTheme} />
                <MenuButton onClick={handleMenuToggle}>
                    <MenuIcon />
                </MenuButton>
            </div>
            <Menu open={menuOpen}>
                <MenuItem to="home" smooth={true} duration={500} onClick={handleMenuToggle}>Home</MenuItem>
                <MenuItem to="about" smooth={true} duration={500} onClick={handleMenuToggle}>Sobre</MenuItem>
                <MenuItem to="services" smooth={true} duration={500} onClick={handleMenuToggle}>Serviços</MenuItem>
                <MenuItem to="portfolio" smooth={true} duration={500} onClick={handleMenuToggle}>Portfólio</MenuItem>
                <MenuItem to="testimonials" smooth={true} duration={500} onClick={handleMenuToggle}>Depoimentos</MenuItem>
                <MenuItem to="blog" smooth={true} duration={500} onClick={handleMenuToggle}>Blog</MenuItem>
                <MenuItem to="contact" smooth={true} duration={500} onClick={handleMenuToggle}>Contato</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Header;
