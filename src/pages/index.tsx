import type { NextPage } from 'next'
import { About } from '@container/About'
import { Footer } from '@container/Footer'
import { Header } from '@container/Header'
import { Works } from '@container/Works'
import { Skills } from '@container/Skills'
import { Testimonials } from '@container/Testimonials'
import { Navbar } from 'components/Navbar'
import styles from '@styles/index.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.app}>
      <main>
        <Navbar />
        <Header />
        <About />
        <Works />
        <Skills />
        <Testimonials />
        <Footer />
      </main>
    </div>
  )
}

export default Home
