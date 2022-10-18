import React, { useState, useEffect, useRef } from "react";
import styles from "./AboutFounder.module.css";
import FounderImg from "../../../Assets/Home/Founder/founder.jpeg";

import Button from "../../../Assets/ElementsUi/Button";

export default function Index() {
  return (
    <>
      {/* <img src="https://unnathi.org/images/logonew.jpg" /> */}
      <div className={styles.AboutAlphaContainer}>
        <div className={styles.AboutMainContainer}>
          <div className={styles.AboutFounderLogoContaier}>
            <div className={styles.AboutFounderLogo}>
              <div className={styles.AboutMainBackground}></div>

              {/* <div className={styles.AboutFounderLogoCircle}>
                <img src="https://unnathi.org/images/logonew.jpg" />
              </div> */}
            </div>
            <div
              className={styles.AboutFounderLogoText}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              {/* <div className={styles.AboutMainBackground}></div> */}

              <p>
                {" "}
                <img src="https://andit.co/projects/html/jago-welfare/assets/img/icon/about.png" />
                Welcome To Unnathi
              </p>
            </div>
          </div>
          <div className={styles.AboutFounderContainer}>
            <div
              className={styles.AboutFounderImg}
              data-aos="fade-up-right"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <img src={FounderImg} />
            </div>
            <div
              className={styles.AboutFounderInfo}
              data-aos="fade-up-left"
              data-aos-delay="300"
              data-aos-duration="600"
            >
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
