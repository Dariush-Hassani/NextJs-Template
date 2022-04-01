import { makeStyles } from "@material-ui/core/styles";

export const ListStyles = makeStyles((theme) => ({
    typo: {
        color: theme.palette.secondary.main
    },
    mainContainer:{
        padding:'30px',
        borderColor: theme.palette.primary.main,
    },
    Link:{
        cursor:'pointer'
    }
}));

export const TodoStyles = makeStyles((theme) => ({
    typo: {
        color: theme.palette.secondary.main
    },
    mainContainer:{
        padding:'30px',
        borderColor: theme.palette.primary.main,
    },
}));