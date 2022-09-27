import React from "react";
import styles from "./welcome.module.css";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";

export default function Index() {
  return (
    <>
      <div className={styles.WelcomeMainContainer}>
        <div className={styles.welcomeContainer}>
          <div className={styles.welcomeItem}>
            <img src="https://andit.co/projects/html/jago-welfare/assets/img/common/about.png"></img>
          </div>
          <div className={styles.welcomeItem}>
            <SecTitle
              title="Welcome to unnathi"
              titleTag="p"
              titleColor="#808080"
              text="“Health is the birth right of an individual”"
              textTag="p"
              textColor="#000"
              textAlign="left"
            />
            <h2>We are the largest crowdfunding</h2>
            <p>
              Welcome to Unnathi Healing Foundation. Everyone wants to be
              healthy. Unnathi Healing Foundation, Bengaluru, is providing the
              required tools and techniques to be healthy, through Yogic
              Healing. The approach of Yogic healing is based on the ancient
              Indian traditional method in which the human body is made of five
              layers.
            </p>
            <p>
              It is narrated in Thittirya Upanishad, ancient Samskrith scripts,
              that the human body contains five layers called Panchakosha.
              Physical body is Annamayakosha and the etheric layer is called
              Pranamayakosha. At Unnathi we heal the Pranamayakosha (the energy
              body) to treat the Annamayakosha (the physical body).
            </p>
            {/* <div className={styles.welcomeSubContent}>
              <button>Learn more</button>
              <a>How we work</a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
