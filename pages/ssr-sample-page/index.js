import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import List from '../../src/Components/ssr-sample-page/List'
import Text from '../../src/Components/_GlobalComponents/Text'
import { ssrSamplePageAPI } from '../../src/Services/_APIs'

const useStyles = makeStyles((theme) => ({
  pad30:{
    padding:'30px',
    paddingBottom:'0px',
    color: theme.palette.secondary.main
  }
}))
const index = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" className={classes.pad30}>
        <Text value="AllTasks" />
      </Typography>
      <List data={data} />
    </>
  )
}

export async function getServerSideProps() {
  let res = await ssrSamplePageAPI.list();
  let data = res.data;
  return { props: { data } }
}

export default index