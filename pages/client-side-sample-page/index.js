import { makeStyles, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import List from '../../src/Components/client-side-sample-page/List'
import Text from '../../src/Components/_GlobalComponents/Text'
import { FetchList } from '../../src/Redux/Actions/CilentSideSampleActions'


const useStyles = makeStyles((theme) => ({
    pad30: {
        padding: '30px',
        paddingBottom: '0px',
        color: theme.palette.secondary.main
    }
}))

const index = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchList());
    }, [])
    return (
        <>
            <Typography variant="h6" className={classes.pad30}>
                <Text value="AllTasks" />
            </Typography>
            <List />
        </>
    )
}

export default index