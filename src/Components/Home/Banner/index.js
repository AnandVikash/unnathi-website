import React from "react";
import BgTitle from "../../Assets/ElementsUi/BgTitle";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import HrLine from "../../Assets/ElementsUi/HrLine";
import styles from "./banner.module.css";
import { motion } from "framer-motion";
import aos from "aos";
export default function Index() {
  // React.useEffect(() => {
  //   aos.init({
  //     once: false,
  //   });
  // }, []);
  return (
    <>
      <div className={styles.bannerMainContainer}>
        <img
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-once="false"
          data-aos-offset="200"
          data-aos-easing="ease-in-out"
          className={styles.leftBottom}
          src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/Path-6.svg"
        />
        <div className={styles.bannerContainer}>
          <div className={styles.bannerText}>
            <BgTitle
              text="BEST BUSINESS"
              length="4"
              tag="p"
              textColor="white"
              secColor="black"
              backgroundColor="#005bea"
              secBackColor="red"
            />
            <br />
            <br />
            <SecTitle
              text="We're Equally Excited About Corporate"
              tag="p"
              colors=" red"
            />
            <br />

            <HrLine height="5px" width="25%" color="#ccc" />
          </div>
          <div className={styles.bannerImage}>
            <div className={styles.bannerImagePos}>
              <div
                className={styles.bannerContentImg}
                // data-aos="fade-up-right"
                // data-aos-duration="1000"
                // data-aos-anchor-placement="center-bottom"
              >
                <motion.img
                  animate={{ x: -40, y: -80 }}
                  transition={{ duration: 1.5 }}
                  className={styles.secImage}
                  src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/Path_1348.svg"
                />
                <motion.img
                  animate={{ x: 50, y: -150 }}
                  transition={{ duration: 1 }}
                  src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/11/programmers-cooperating-at-information-technology-JCZRMFE-test.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
