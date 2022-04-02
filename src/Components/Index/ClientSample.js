import { Box, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react'
import Text from '../_GlobalComponents/Text';
import { ClientSampleStyles } from './_Styles';

const ClientSample = () => {
    const classes = ClientSampleStyles();
    return (
        <Box className={classes.container} >
            <Typography className={classes.themeTitle}>
                <Text value="ClientSide" />
            </Typography>
            <Link href="/client-side-sample-page">
                <Typography className={classes.title}><Text value="Static"/></Typography>
            </Link>
            <Link href="/client-side-sample-page/1">
                <Typography className={classes.title}><Text value="Dynamic"/></Typography>
            </Link>
        </Box>
    )
}

export default ClientSample