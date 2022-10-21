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
          title=""
          titleTag="p"
          titleColor="#808080"
          text="About us"
          textTag="p"
          textColor="#000"
        />
        {/* <div className={styles.AboutBackGround}></div> */}
        <div className={styles.AboutContainer}>
          {/* 
          <div className={styles.AboutIconContainer}>
            <div
              className={styles.AboutImg}
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img src={Bookimg} />
              <p>Healing</p>
              <Link to="/healing">More details...</Link>
            </div>
          </div>
          <div className={styles.AboutIconContainer}>
            <div
              className={styles.AboutImg}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img src={Bookimg} />
              <p>Training</p>
              <Link to="/training">More details...</Link>
            </div>
          </div>
          <div className={styles.AboutIconContainer}>
            <div
              className={styles.AboutImg}
              data-aos="fade-down-right"
              data-aos-delay="800"
            >
              <img src={Bookimg} />
              <p>Projects</p>
              <Link to="/projects">More details...</Link>
            </div>
          </div>
        </div> */}
          <p>
            Welcome to Unnathi Healing Foundation. Everyone wants to be healthy.
            Unnathi Healing Foundation, Bengaluru, is providing the required
            tools and techniques to be healthy, through Yogic Healing. The
            approach of Yogic healing is based on the ancient Indian traditional
            method in which the human body is made of five layers.
          </p>
          <Link to="/about-us"> Read More</Link>
        </div>
      </div>
      {/* <img src={require("../../Assets/Home/AboutUs/book-icon.png")} /> */}
    </>
  );
}
