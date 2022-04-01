import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { TodoStyles } from './_styles'
import Text from '../_GlobalComponents/Text';

const Todo = ({ data }) => {
    const classes = TodoStyles();
    return (
        <Box className={classes.mainContainer}>
            <Typography className={classes.typo}>
                <Text value="ID" />
                {" : "}
                {data.id}
            </Typography>
            <Typography className={classes.typo}>
                <Text value="Title"/>
                {" : "}
                {data.title}
            </Typography>
        </Box>
    )
}

export default Todo