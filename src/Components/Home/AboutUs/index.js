import React from "react";
import img from "../../Assets/Home/AboutUs/group-image.jpg";
import styles from "./About.module.css";
import BgTitle from "../../ElementsUi/BgTitle";
export default function index() {
  return (
    <>
      <div className={styles.aboutMainContainer}>
        <div className={styles.aboutContainer}>
          <div className={styles.imgContainer}>
            <img src={img} />

            <div className={styles.blueBackGround}></div>
            <div className={styles.cementBackGround}></div>
          </div>
          <div className={styles.aboutTextContainer}>
            <div className={styles.content}>
              <BgTitle text="ABOUT US" length="3" tag="p" />
              <h3>Creative Design & Development</h3>
              <p>
                Our Mission Is To Provide Quality English Language Instruction
                Through A Variety Of Courses To International And Local Students
                In A Professional And Supportive Atmosphere Utilizing Our Unique
                English Teaching Methodology. Our Mission Is To Provide.
              </p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
