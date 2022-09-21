import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { motion } from "framer-motion";

import styles from '@styles/index.module.scss'

export const SocialMedia = () => (
  <motion.div 
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 2 }}
    className={styles.app__social}>
    <button>
      <BsTwitter />
    </button>
    <button>
      <FaFacebookF />
    </button>
    <button>
      <BsInstagram />
    </button>
  </motion.div>
);
