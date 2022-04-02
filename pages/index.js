import ChangeLanguage from '../src/Components/Index/ChangeLanguage'
import ChangeTheme from '../src/Components/Index/ChangeTheme'
import ClientSample from '../src/Components/Index/ClientSample'
import SSRSample from '../src/Components/Index/SSRSample'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ChangeTheme />
      <ChangeLanguage />
      <SSRSample />
      <ClientSample />
    </div>
  )
}
