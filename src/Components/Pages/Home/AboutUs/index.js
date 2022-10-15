import React, { useState, useEffect, useRef } from "react";
import styles from "./About.module.css";
import Bookimg from "../../../Assets/Home/AboutUs/book-icon.png";
import { Link } from "react-router-dom";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";

export default function Index() {
  const img1 = "../../../Assets/Home/AboutUs/book-icon.png";

  return (
    <>
      <div className={styles.AboutAlphaContainer}>
        <SecTitle
          title="About us"
          titleTag="p"
          titleColor="#808080"
          text=""
          textTag="p"
          textColor="#000"
        />
        <div className={styles.AboutBackGround}></div>
        <div className={styles.AboutContainer}>
          <div className={styles.AboutIconContainer}>
            <div className={styles.AboutImg}>
              <img src={Bookimg} />
              <p>Healing</p>
              <Link to="/healing">More details...</Link>
            </div>
          </div>
          <div className={styles.AboutIconContainer}>
            <div className={styles.AboutImg}>
              <img src={Bookimg} />
              <p>Training</p>
              <Link to="/training">More details...</Link>
            </div>
          </div>
          <div className={styles.AboutIconContainer}>
            <div className={styles.AboutImg}>
              <img src={Bookimg} />
              <p>Projects</p>
              <Link to="/projects">More details...</Link>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={require("../../Assets/Home/AboutUs/book-icon.png")} /> */}
    </>
  );
}
