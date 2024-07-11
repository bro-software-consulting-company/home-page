import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface ThemeContextType {
    toggleTheme: () => void;
    theme: 'light' | 'dark';
}

export const ThemeContext = createContext<ThemeContextType>({
    toggleTheme: () => {},
    theme: 'light'
});

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const muiTheme: Theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: theme
                }
            }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            <MuiThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
