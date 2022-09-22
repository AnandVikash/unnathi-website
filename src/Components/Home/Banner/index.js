import React from "react";
import BgTitle from "../../Assets/ElementsUi/BgTitle";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import HrLine from "../../Assets/ElementsUi/HrLine";
import Button from "../../Assets/ElementsUi/Button";

import styles from "./banner.module.css";
import { motion } from "framer-motion";
import aos from "aos";
import headerBannerImg from "../../Assets/Home/Banner/header-banner.jpeg";
export default function Index() {
  // React.useEffect(() => {
  //   aos.init({
  //     once: false,
  //   });
  // }, []);
  return (
    <>
      <div className={styles.bannerAlphaContainer}>
        <div className={styles.bannerMainContainer}>
          <div className={styles.bannerTextContainer}>
            <div className={styles.bannerTextTitle}>
              <p>Share your love to</p>
              <p>make someone’s</p>
              <p>life better</p>
            </div>

            <p className={styles.bannerText}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a type and scrambled.
            </p>
            <Button
              btntext="Register"
              bgcolor="#A82C24"
              hoverBgColor="#fff"
              color="#fff"
              hoverColor="#A82C24"
            />
          </div>
          <div className={styles.bannerImgContainer}></div>
        </div>
      </div>
    </>
  );
}
