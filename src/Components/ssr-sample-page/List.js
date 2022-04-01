import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Link from 'next/link'
import { ListStyles } from './_styles'
const List = ({ data }) => {
    const classes = ListStyles();
    return (
        <Box className={classes.mainContainer}>
            {data.map(item =>
                <Box key={item.id}>
                    <Typography component="span" className={classes.typo}> {item.id} {'-------'} </Typography>
                    <Link href={`/ssr-sample-page/${item.id}`}>
                        <Typography component="span" className={`${classes.typo} ${classes.Link}`}>{item.title}</Typography>
                    </Link>
                </Box>
            )}
        </Box>
    )
}

export default List