import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { TodoStyles } from './_styles'
import Text from '../_GlobalComponents/Text';
import { useSelector } from 'react-redux';

const Todo = () => {
    const classes = TodoStyles();
    const data = useSelector(state => state.ClientSideSample.todo);
    const loading = useSelector(state => state.ClientSideSample.loadingTodo)
    return (
        <Box className={classes.mainContainer}>
            {loading ?
                <Typography component="span" className={classes.typo}><Text value="Loading" />...</Typography> :
                <>
                    <Typography className={classes.typo}>
                        <Text value="ID" />
                        {" : "}
                        {data.id}
                    </Typography>
                    <Typography className={classes.typo}>
                        <Text value="Title" />
                        {" : "}
                        {data.title}
                    </Typography>
                </>
            }
        </Box>
    )
}

export default Todo