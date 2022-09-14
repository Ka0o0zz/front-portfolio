import type { NextPage } from 'next'
import styles from '@styles/Home.module.scss'
import { About } from '@container/About'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <About />
      </main>
    </div>
  )
}

export default Home
