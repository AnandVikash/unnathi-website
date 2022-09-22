import React, { useState, useEffect, useRef } from "react";
import styles from "./About.module.css";
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
      <div className={styles.AboutAlphaContainer}>
        <div className={styles.AboutBackGround}></div>
        <div className={styles.AboutContainer}>
          <div className={styles.AboutIconContainer}>
            <div className={styles.AboutImg}>
              <img src={Bookimg} />
              <p>Healing</p>
              <a>More details...</a>
            </div>
          </div>
          <div className={styles.AboutIconContainer}>
            <div className={styles.AboutImg}>
              <img src={Bookimg} />
              <p>Training</p>
              <a>More details...</a>
            </div>
          </div>
          <div className={styles.AboutIconContainer}>
            <div className={styles.AboutImg}>
              <img src={Bookimg} />
              <p>Projects</p>
              <a>More details...</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
