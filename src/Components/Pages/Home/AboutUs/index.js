import React, { useState, useEffect, useRef } from "react";
import styles from "./About.module.css";
import Bookimg from "../../../Assets/Home/AboutUs/book-icon.png";

export default function Index() {
  const img1 = "../../../Assets/Home/AboutUs/book-icon.png";
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
      {/* <img src={require("../../Assets/Home/AboutUs/book-icon.png")} /> */}
    </>
  );
}
