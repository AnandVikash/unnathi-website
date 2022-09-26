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
          <div className={styles.ourTeamContent}>
            <div className={styles.ourCards}>
              <div>
                <img
                  src="https://andit.co/projects/html/jago-welfare/assets/img/volunteer/volunteer-1.png"
                  alt=""
                />
              </div>
              <div>
                <h3>Mark carson</h3>
                <p>projects manager</p>
              </div>
            </div>
            <div className={styles.ourCards}>
              <div>
                <img
                  src="https://andit.co/projects/html/jago-welfare/assets/img/volunteer/volunteer-2.png"
                  alt=""
                />
              </div>
              <div>
                <h3>Anna naomi</h3>
                <p>Nutritionist</p>
              </div>
            </div>
            <div className={styles.ourCards}>
              <div>
                <img
                  src="https://andit.co/projects/html/jago-welfare/assets/img/volunteer/volunteer-3.png"
                  alt=""
                />
              </div>
              <div>
                <h3>Graim clair</h3>
                <p>Health advisor</p>
              </div>
            </div>
            <div className={styles.ourCards}>
              <div>
                <img
                  src="https://andit.co/projects/html/jago-welfare/assets/img/volunteer/volunteer-4.png"
                  alt=""
                />
              </div>
              <div>
                <h3>David smith</h3>
                <p>Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
