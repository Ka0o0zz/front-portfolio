/* eslint-disable @next/next/no-img-element */
import {motion} from 'framer-motion'


import indexStyles from '@styles/index.module.scss'
import styles from '@styles/container/About.module.scss'
import { urlFor } from 'helpers/client';


export const About = ({abouts}:{abouts:TAbouts[]}) => {
  return (  
    <div id='about' className={styles.app__about}>
      <h2 className={indexStyles.headtext}>
        I Know that <span>Good Design</span> 
        <br />
        means <span>Good Business</span>
      </h2>

      <div className={styles.app__profiles}>
      {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className={styles.app__profile_item}
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className={indexStyles.boldtext} style={{ marginTop: 20 }}>{about.title}</h2>
            <p className={indexStyles.ptext} style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
};
