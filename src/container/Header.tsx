/* eslint-disable @next/next/no-img-element */
import styles from "@styles/container/Header.module.scss";
import indexStyle from "@styles/index.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";


const scaleVaiants = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition:{
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const technologies = [ 
  'css.png', 
  'html.png', 
  'javascript.png',
]

export const Header = () => {
  return (
    <section id={styles.home} className={styles.app__header}>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.app__header_info}
      >
        <div className={styles.app__header_badge}>
          <div className={styles.badge_cmp}>
            <span>👋 </span>
            <div>
              <p className={indexStyle.ptext}>Hello, I am</p>
              <h1 className={indexStyle.headtext}> David</h1>
            </div>
          </div>

          <div className={styles.tag_cmp}>
            <p className={indexStyle.ptext}>Web Fullstack Developer</p>
          </div>
        </div>

        
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.app__header_img}
      >

        <Image 
          src="/profile.png" 
          alt="profile_bg" 
          width={585} 
          height={714} 
        />
        
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src="circle.svg"
          alt="profile_circle"
          className={styles.overlay_circle}
        />

      </motion.div>

      <motion.div
        variants={scaleVaiants}
        whileInView={scaleVaiants.whileInView}
        className={styles.app__header_circles}
      >
        {technologies.map((tech:string, index:number)=>(
          <div key={`key-${tech}-${index}`} className={styles.circle_cmp}>
            <img 
              src={`/${tech}`} 
              alt={`img-${tech.split('.')[0]}`}
            />
          </div>
          
        ))}
      </motion.div>
    </section>
  );
};
