import {motion} from 'framer-motion'
import { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import indexStyles from '@styles/index.module.scss'
import styles from '@styles/container/Works.module.scss'

import { urlFor } from 'helpers/client';

export const Works = ({works}:{works:TWorks[]}) => {

  const [filterWork, setFilterWork] = useState(works)
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState<object| any>({ y: 0, opacity: 1 });

  const handleWorkFilter = (item:string) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return(
    <section id={'work'} className={indexStyles.app__primarybg}>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.app__works}
      >
        <h2 className={indexStyles.headtext}>My Creative <span>Portfolio</span> Section</h2>

        <div className={styles.app__work_filter}>
        {['All','UI/UX', 'Web App', 'Next JS', 'Landing Page','React JS', 'FullStack'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={activeFilter === item ? styles.item_active : styles.app__work_filter_item}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.app__work_portfolio}
      >
        {filterWork.map((work, index) => (
          <div className={styles.app__work_item} key={index}>
            <div
              className={styles.app__work_img}
            >
              <img src={urlFor(work.imgUrl)} alt={''} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className={styles.app__work_hover}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className={indexStyles.app__flex}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className={indexStyles.app__flex}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className={styles.app__work_content}>
              <h4 className={indexStyles.boldtext}>{work.title}</h4>
              <p className={indexStyles.ptext} style={{ marginTop: 10 }}>{work.description}</p>

              <div className={styles.app__work_tag}>
                <p className={indexStyles.ptext}>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      </motion.div>

    </section>  
  )
};
