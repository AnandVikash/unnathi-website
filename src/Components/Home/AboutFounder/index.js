import React, { useState, useEffect, useRef } from "react";
import styles from "./AboutFounder.module.css";
import FounderImg from "../../Assets/Home/Founder/founder.jpeg";
import Bookimg from "../../Assets/Home/AboutUs/book-icon.png";
import backgroundImg from "../../Assets/Home/AboutUs/jupiter.svg";
import BgTitle from "../../Assets/ElementsUi/BgTitle";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import Button from "../../Assets/ElementsUi/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
export default function Index() {
  return (
    <>
      {/* <img src="https://unnathi.org/images/logonew.jpg" /> */}
      <div className={styles.AboutAlphaContainer}>
        <div className={styles.AboutMainContainer}>
          <div className={styles.AboutFounderLogoContaier}>
            <div className={styles.AboutFounderLogo}>
              <div className={styles.AboutFounderLogoCircle}>
                <img src="https://unnathi.org/images/logonew.jpg" />
              </div>
            </div>
            <div className={styles.AboutFounderLogoText}>
              <div className={styles.AboutMainBackground}></div>
              <p>Welcome To Unnathi</p>
            </div>
          </div>
          <div className={styles.AboutFounderContainer}>
            <div className={styles.AboutFounderImg}>
              <img src={FounderImg} />
            </div>
            <div className={styles.AboutFounderInfo}>
              <p className={styles.AboutFounderInfoTitle}>
                Unnathi Healing Foundation was founded in 2001 by Dr. Saraswathi
                Hegde.
              </p>
              <p>
                Dr. Saraswathi Hegde, a pranic healer, Sanskrit scholar,
                acharya, mentor and a social activist, has made it her life s
                mission to elevate the well being of people through spirituality
                and healing
              </p>
              <p>
                The dedicated team of employees and volunteers at Unnathi
                Healing Foundation lead by Dr. Saraswathi Hegde is currently
                working
              </p>
              <div className={styles.AboutFounderInfoButton}>
                <div>
                  <Button
                    btntext="Register"
                    bgcolor="#09324C"
                    hoverBgColor="#fff"
                    color="#fff"
                    hoverColor="#A82C24"
                  />
                </div>
                <div>
                  <p>How We Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
