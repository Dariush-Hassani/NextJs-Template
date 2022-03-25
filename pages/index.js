import { Button } from '@material-ui/core'
import Head from 'next/head'
import ChangeDirection from '../src/Components/Index/ChangeDirection'
import ChangeTheme from '../src/Components/Index/ChangeTheme'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChangeDirection/>
      <ChangeTheme/>
      
    </div>
  )
}
