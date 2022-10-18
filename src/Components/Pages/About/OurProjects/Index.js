import React from "react";
import styles from "./ourProjects.module.css";
export default function Index() {
  return (
    <>
      <div className={styles.ourProjectsMainContainer}>
        <div className={styles.ourProjects}>
          <div
            className={styles.ourProjectsText}
            data-aos="fade-up-down"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <p>Join the community</p>
            <h2>
              Let’s make a bold move to bring the difference of others live
            </h2>
          </div>
        </div>
        <div
          className={styles.ourProjects}
          data-aos="fade-up-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <button className={styles.ourProjectsBtn}>Become a volunteer</button>
        </div>
      </div>
    </>
  );
}
