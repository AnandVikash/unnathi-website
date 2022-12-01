import React, { useState, useEffect, useRef } from "react";
import styles from "./AboutFounder.module.css";
import FounderImg from "../../../Assets/Home/Founder/founder-img.jpg";

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
              data-aos-delay="0"
              data-aos-duration="500"
            >
              {/* <div className={styles.AboutMainBackground}></div> */}

              <p>
                {" "}
                {/* <img src="https://andit.co/projects/html/jago-welfare/assets/img/icon/about.png" /> */}
                Welcome To Unnathi
              </p>
            </div>
          </div>
          <div className={styles.AboutFounderContainer}>
            <div className={styles.AboutFounderImg}>
              <img src={FounderImg} />
            </div>
            <div
              className={styles.AboutFounderInfo}
              data-aos="fade-up-left"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              {/* <p className={styles.AboutFounderInfoTitle}></p> */}
              <p>
                I thank you very much for visiting Unnathi, an NGO for more than
                two decades of service. Your visit and time strengthens us to
                fulfil the vision of Unnathi to empower human beings to lead
                joyful, healthy, fulfilling, and prosperous lives. I encourage
                you to go through our website to understand our objectives and
                support us. I urge you to visit Unnathi at sanjaynagar,
                Bengaluru with your family and friends with preferably a prior
                appointment or walk in to know us more in person. We help people
                to discover the purpose of life and to work towards achieving
                the same.
              </p>
              <p>
                Unnathi relentlessly empowers adolescent children through
                counseling services, provides healing services to patients,
                trains people to equip themselves with healing techniques, and
                trains people at educational / medical institutions. Our work
                provides India with responsible and empowered citizens to build
                our nation to our past glory. We take pride in our ancient
                culture and its mystic knowledge. At Unnathi, we continuously
                strive to convert this precious and proven wisdom into regular
                practices in daily lives to enjoy bliss, happiness, good health,
                peace and abundance. Unnathi is blessed with thousands of people
                who have miraculously transformed their lives with health,
                happiness and prosperity.
              </p>
              <p>
                Unnathi celebrates many activities and conducts training
                programme throughout the calendar year and invites you to join
                during the activities.We also request your volunteering support
                to roll out programs impacting society positively. I am happy to
                inform you that your donations are covered under 80G of Income
                Tax Act for tax exemption.
              </p>
              <p>
                Looking forward to your active collaboration and participation
                with Unnathi.
              </p>
              <p>With warm regards, </p>
              <p className={styles.FounderTitle}>Dr Saraswathi Hedge</p>
              <p className={styles.FounderDesignation}> Founder President</p>
              {/* <div className={styles.AboutFounderInfoButton}>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
