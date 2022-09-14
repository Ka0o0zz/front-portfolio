import { useState } from "react";
import Image from "next/image";
import styles from "@styles/components.module.scss";
import { useHandleWidth } from "hooks/useHandleWidth";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const width = useHandleWidth();

  // function, depending on the size of the screen we give the values
  //of the size that the next Image component will take
  const handleSizeImage = () => {
    if (width > 1000) {
      return {
        width: 178,
        height: 38,
      };
    }
    if (width > 2000) {
      return {
        width: 240,
        height: 68,
      };
    }
    return {
      width: 120,
      height: 28,
    };
  };

  const sizeImage = handleSizeImage();

  return (
    <nav className={styles.app__navbar}>
      <div>
        <Image
          src="/logo.png"
          alt="logo david morales"
          width={sizeImage.width}
          height={sizeImage.height}
        />
      </div>
      <ul className={styles.link__navbar}>
        {["Home", "About", "Contact", "Works", "Skills"].map(
          (item: string, index: number) => (
            <li key={`link-${item}-${index}`}>
              <div />
              <a href="#">{item}</a>
            </li>
          )
        )}
      </ul>

      <div className={styles.app__navbar__menu}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "About", "Contact", "Works", "Skills"].map(
                (item: string, index: number) => (
                  <li
                    key={`link-menu-${item}-${index}`}
                    onClick={() => setToggle(false)}
                  >
                    <a href="#">{item}</a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
