import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#19857b',
        },
        background: '#ccc'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    direction: 'rtl',
                    backgroundColor: '#19857b'
                }
            }
        }
    }
});
export default theme;

export const Colors = {
    Light: {
        background: 'white'
    },
    Dark: {
        background: 'black'
    }
};

