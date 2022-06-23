import React, { useState, useEffect, useRef } from "react";
import img from "../../Assets/Home/AboutUs/group-image.jpg";
import styles from "./About.module.css";
import BgTitle from "../../Assets/ElementsUi/BgTitle";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import Button from "../../Assets/ElementsUi/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
export default function Index() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const [scrollPosition, setScrollPosition] = useState(0);

  const imganimation = useAnimation();
  const animationBox1 = useAnimation();
  const animationBox2 = useAnimation();
  let scrollPos = Math.ceil(scrollPosition);
  useEffect(() => {
    if (inView) {
      imganimation.start({
        y: scrollPos / 40,
        transition: { type: "spring", stiffness: 100 },
      });
      animationBox1.start({
        x: scrollPos / 35,
        transition: { type: "spring", stiffness: 100 },
      });
      animationBox2.start({
        y: scrollPos / 20,
        transition: { type: "spring", stiffness: 100 },
      });
    }
    if (!inView) {
    }
  }, [inView, scrollPosition]);
  const handleScroll = () => {
    const position = Math.floor(window.pageYOffset);
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        // data-aos-once="false"
        className={` ${styles.aboutMainContainer}`}
      >
        <div className={styles.aboutContainer} ref={ref}>
          <div
            className={styles.imgContainer}

            // data-aos-duration="1000"
          >
            <motion.div
              animate={animationBox2}
              className={styles.blueBackGround}
            ></motion.div>
            <motion.div
              animate={animationBox1}
              className={styles.cementBackGround}
            ></motion.div>
            {/* <motion.img src={img} animate={animationBox1} /> */}
            <motion.img animate={imganimation} src={img} />
          </div>
          <div className={styles.aboutTextContainer}>
            <div className={styles.content}>
              <BgTitle text="ABOUT US" length="3" tag="p" />
              <SecTitle
                text="Creative Design & Development"
                tag="h3"
                colors="#347deb"
              />

              <p>
                Our Mission Is To Provide Quality English Language Instruction
                Through A Variety Of Courses To International And Local Students
                In A Professional And Supportive Atmosphere Utilizing Our Unique
                English Teaching Methodology. Our Mission Is To Provide.
              </p>

              <Button
                btntext="Read More"
                bgcolor="linear-gradient(90deg, rgba(255,192,0,0.9223039557619923) 26%, rgba(233,255,0,1) 76%)"
                hoverBgColor="blue"
                color="blue"
                hoverColor="white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
