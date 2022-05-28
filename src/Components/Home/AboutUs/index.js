import React, { useEffect } from "react";
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
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log("true");
      animation.start({
        x: 100,
      });
    }
    if (!inView) {
      animation.start({
        x: 0,
      });
    }
  }, [inView]);

  return (
    <>
      <div className={` ${styles.aboutMainContainer}`}>
        <div className={styles.aboutContainer}>
          <div className={styles.imgContainer}>
            <img src={img} ref={ref} />

            <div className={styles.blueBackGround}></div>
            <motion.div
              animate={animation}
              className={styles.cementBackGround}
            ></motion.div>
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
