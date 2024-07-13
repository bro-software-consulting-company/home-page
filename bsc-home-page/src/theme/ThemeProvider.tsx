import React, { createContext, useState, useMemo, ReactNode } from 'react';
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

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const muiTheme: Theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: theme,
                    primary: {
                        main: theme === 'light' ? '#0d47a1' : '#212121'
                    },
                    background: {
                        default: theme === 'light' ? '#ffffff' : '#121212'
                    }
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
