import { makeStyles } from "@material-ui/core/styles";

export const ChangeLanguageStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.secondary.main
    },
    container: {
        border: '1px dashed',
        borderColor: theme.palette.secondary.main,
        padding: '20px',
        borderRadius: '10px',
        marginTop:'20px'
    },
    themeTitle: {
        marginTop: '-25px !important',
        position: 'relative',
        top: '-8px',
        background: theme.palette.primary.main,
        width:'100px',
        color: theme.palette.secondary.main,
        textAlign:'center'
    },
    radio:{
        "& svg":{
            fill:theme.palette.secondary.main
        },
        "& path":{
            stroke:theme.palette.secondary.main
        },
        color: theme.palette.secondary.main
    }
}));

export const ChangeThemeStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.secondary.main
    },
    container: {
        border: '1px dashed',
        borderColor: theme.palette.secondary.main,
        padding: '20px',
        borderRadius: '10px',
        marginTop:'20px'
    },
    themeTitle: {
        marginTop: '-25px !important',
        position: 'relative',
        top: '-8px',
        background: theme.palette.primary.main,
        width:'100px',
        color: theme.palette.secondary.main,
        textAlign:'center'
    },
    radio:{
        "& svg":{
            fill:theme.palette.secondary.main
        },
        "& path":{
            stroke:theme.palette.secondary.main
        },
        color: theme.palette.secondary.main
    }
}));

export const SSRSampleStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.secondary.main,
        cursor:'pointer'
    },
    container: {
        border: '1px dashed',
        borderColor: theme.palette.secondary.main,
        padding: '20px',
        borderRadius: '10px',
        marginTop:'20px'
    },
    themeTitle: {
        marginTop: '-25px !important',
        position: 'relative',
        top: '-8px',
        background: theme.palette.primary.main,
        width:'240px',
        color: theme.palette.secondary.main,
        textAlign:'center'
    },
}));

export const ClientSampleStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.secondary.main,
        cursor:'pointer'
    },
    container: {
        border: '1px dashed',
        borderColor: theme.palette.secondary.main,
        padding: '20px',
        borderRadius: '10px',
        marginTop:'20px'
    },
    themeTitle: {
        marginTop: '-25px !important',
        position: 'relative',
        top: '-8px',
        background: theme.palette.primary.main,
        width:'240px',
        color: theme.palette.secondary.main,
        textAlign:'center'
    },
}));
