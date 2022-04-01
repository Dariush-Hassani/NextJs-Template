import React from 'react'
import { Box, Typography } from '@material-ui/core'
import Link from 'next/link'
import { ListStyles } from './_styles'
import { useSelector } from 'react-redux'
import Text from '../_GlobalComponents/Text'
const List = () => {
    const classes = ListStyles();
    const data = useSelector(state => state.ClientSideSample.list);
    const loading = useSelector(state => state.ClientSideSample.loading)

    return (
        <Box className={classes.mainContainer}>
            {loading ?
                <Typography component="span" className={classes.typo}><Text value="Loading"/>...</Typography> :
                data?.map(item =>
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