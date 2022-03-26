import Link from 'next/link'
import ChangeLanguage from '../src/Components/Index/ChangeLanguage'
import ChangeTheme from '../src/Components/Index/ChangeTheme'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ChangeTheme/>
      <ChangeLanguage/>
      <Link href="/dariush">Dariush</Link>
    </div>
  )
}
