import React from "react";
import styles from "./ourProjects.module.css";
export default function Index() {
  return (
    <>
      <div className={styles.ourProjectsMainContainer}>
        <div className={styles.ourProjects}>
          <div className={styles.ourProjectsText}>
            <p>Join the community</p>
            <h2>
              Let’s make a bold move to bring the difference of others live
            </h2>
          </div>
        </div>
        <div className={styles.ourProjects}>
          <button className={styles.ourProjectsBtn}>Become a volunteer</button>
        </div>
      </div>
    </>
  );
}
