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
import { SocialMedia } from 'components/SocialMedia'


export async function getStaticProps() {
  const queryAbouts = '*[_type == "abouts"]';
  const queryWorks = '*[_type == "works"]';


  const abouts = await sanityClient.fetch(queryAbouts)
  const works = await sanityClient.fetch(queryWorks)

  return{
    props:{
      abouts,
      works
    }
  }
}


const Home = ({abouts, works}:{abouts:TAbouts[], works:TWorks[]}) => {
  return (
    <div className={styles.app}>
      <main>
        <SocialMedia />
        <Navbar />
        <Header />
        <About abouts={abouts}/>
        <Works works={works}/>
        <Skills />
        <Testimonials />
        <Footer />
      </main>
    </div>
  )
}

export default Home
