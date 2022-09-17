import type { NextPage } from 'next'
import { About } from '@container/About'
import { Footer } from '@container/Footer'
import { Header } from '@container/Header'
import { Works } from '@container/Works'
import { Skills } from '@container/Skills'
import { Testimonials } from '@container/Testimonials'
import { Navbar } from 'components/Navbar'
import styles from '@styles/index.module.scss'
import { sanityClient } from 'helpers/client'


export async function getStaticProps() {
  const query = '*[_type == "abouts"]';
  const abouts = await sanityClient.fetch(query)

  return{
    props:{
      abouts
    }
  }
}


const Home = ({abouts}:{abouts:TAbout[]}) => {
  return (
    <div className={styles.app}>
      <main>
        <Navbar />
        <Header />
        <About abouts={abouts}/>
        <Works />
        <Skills />
        <Testimonials />
        <Footer />
      </main>
    </div>
  )
}

export default Home
