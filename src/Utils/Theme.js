import { createTheme } from '@material-ui/core/styles';

const colors = {
    Dark: {
        background: '#000',
        typo: '#fff'
    },
    Light: {
        background: '#ccc',
        typo: '#000'
    }
}
// Create a theme instance.
const createCustomTheme = (direction,themeMode) =>
    createTheme({
        direction: direction,
        palette: {
            primary: {
                main: colors[themeMode].background,
            },
            secondary: {
                main: colors[themeMode].typo,
            },
            common: {
                main: "#FFFFFF",
                secondary: "#212121",
                background: '#sdf',
                darkBlue: "#232E42",
                grey: "#A7A7A7",
                lightGrey: "#3E4A60",
                orange: "#FFAB44",
                dividerColor: "#767676"
            },
            error: {
                main: "#FF5844",
            },
            // background: {
            //   default: "#fff",
            // },
            direction: direction,

        },
        typography: {
            fontFamily: "VazirMedium",
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
        },
        overrides: {
            MuiCssBaseline: {
                "@global": {
                    body: {
                        flip: false,
                        direction: direction,
                        backgroundColor: colors[themeMode].background
                    },
                },
            },
        },
    })


export default createCustomTheme
