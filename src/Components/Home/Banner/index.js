import React from "react";
import BgTitle from "../../Assets/ElementsUi/BgTitle";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import HrLine from "../../Assets/ElementsUi/HrLine";
import styles from "./banner.module.css";
import { motion } from "framer-motion";

export default function index() {
  return (
    <>
      <div className={styles.bannerMainContainer}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerContent}>
            <div
              className={styles.bannerContentText}

              // initial={{
              //   x: 0,
              //   rotate: 200,
              // }}
              // animate={{
              //   x: 200,
              //   backgroundColor: "red",
              //   rotate: 0,
              // }}
              // transition={{
              //   type: "spring",
              //   stiffness: 60,
              // }}
            >
              <BgTitle
                text="BEST BUSINESS"
                length="4"
                tag="p"
                textColor="white"
                secColor="black"
                backgroundColor="#005bea"
              />
              <br />
              <br />
              <SecTitle
                text="We're Equally Excited About Corporate"
                tag="h3"
                colors="black"
              />
              <br />

              <HrLine height="5px" width="25%" color="#ccc" />
            </div>
            <div className={styles.bannerContentImage}>
              <div className={styles.bannerContentImg}>
                <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/11/programmers-cooperating-at-information-technology-JCZRMFE-test.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
