import React from "react";
import styles from "./ourTeam.module.css";
export default function Index() {
  return (
    <>
      <div className={styles.ourTeamMainContainer}>
        <div className={styles.ourTeamContainer}>
          <p>Ready to help</p>
          <h1>We have thousands of happy volunteer to help you</h1>
        </div>
        <div className={styles.ourTeamMembers}>
          <div className={styles.ourTeamCount}>
            <div className={styles.ourTeamContent}>
              <img src="https://andit.co/projects/html/jago-welfare/assets/img/volunteer/volunteer-1.png" />
              <h1>Mark carson</h1>
              <p>Project manager</p>
            </div>
          </div>
          <div className={styles.ourTeamCount}>
            <div className={styles.ourTeamContent}>
              <div>
                <img src="https://andit.co/projects/html/jago-welfare/assets/img/volunteer/volunteer-2.png" />
              </div>
              <div className={styles.ourTeamText}>
                <h1>Anna naomi</h1>
                <p>Nutritionist</p>
              </div>
            </div>
          </div>
          <div className={styles.ourTeamCount}>
            <div className={styles.ourTeamContent}>
              <img src="https://andit.co/projects/html/jago-welfare/assets/img/volunteer/volunteer-3.png" />
              <h1>Graim clair</h1>
              <p>Health advisor</p>
            </div>
          </div>
          <div className={styles.OurTeamCount}>
            <div className={styles.ourTeamContent}>
              <img src="https://andit.co/projects/html/jago-welfare/assets/img/volunteer/volunteer-4.png" />
              <h1>David smith</h1>
              <p>Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
