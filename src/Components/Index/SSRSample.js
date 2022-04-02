import { Box, Typography } from '@material-ui/core'
import Link from 'next/link';
import React from 'react'
import Text from '../_GlobalComponents/Text'
import { SSRSampleStyles } from './_Styles';

const SSRSample = () => {
    const classes = SSRSampleStyles();
    return (
        <Box className={classes.container} >
            <Typography className={classes.themeTitle}>
                <Text value="SSR" />
            </Typography>
            <Link href="/ssr-sample-page">
                <Typography className={classes.title}><Text value="Static"/></Typography>
            </Link>
            <Link href="/ssr-sample-page/1">
                <Typography className={classes.title}><Text value="Dynamic"/></Typography>
            </Link>
        </Box>
    )
}

export default SSRSample