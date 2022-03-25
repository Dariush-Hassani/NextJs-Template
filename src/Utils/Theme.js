import { createTheme as MuiCreateTheme } from "@material-ui/core"

const colors = {
    Dark: {
        background: '#000',
        typo: '#fff'
    },
    Light: {
        background: '#fff',
        typo: '#000'
    }
}
// Create a theme instance.
const createTheme = (direction, themeMode) =>
    MuiCreateTheme({
        direction: direction,
        palette: {
            background: colors[themeMode].background,
            typography: colors[themeMode].typo
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
            selected: {
                '&.Mui-selected': {
                    backgroundColor: "turquoise",
                    color: "white",
                    fontWeight: 600
                }
            }
        },
    })


export default createTheme
