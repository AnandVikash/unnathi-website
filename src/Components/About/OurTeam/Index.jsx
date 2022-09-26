import React from "react";
import styles from "./ourTeam.module.css";
import SecTitle from "../../Assets/ElementsUi/SecTitle";

export default function Index() {
  return (
    <>
      <div className={styles.ourTeamMainContainer}>
        <div className={styles.ourTeamContainer}>
          <SecTitle
            title="Ready to help"
            titleTag="p"
            titleColor="#808080"
            text="We have thousands of happy volunteer to help you"
            textTag="p"
            textColor="#000"
          />
        </div>
        <div className={styles.ourTeamMembers}>
          <div className={styles.ourTeamContent}>
            <div>
              {" "}
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
            </div>
            <div>
              {" "}
              <div className={styles.ourCards}>
                <div>
                  <img
                    src="https://andit.co/projects/html/jago-welfare/assets/img/volunteer/volunteer-2.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>Mark carson</h3>
                  <p>projects manager</p>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className={styles.ourCards}>
                <div>
                  <img
                    src="https://andit.co/projects/html/jago-welfare/assets/img/volunteer/volunteer-3.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>Mark carson</h3>
                  <p>projects manager</p>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className={styles.ourCards}>
                <div>
                  <img
                    src="https://andit.co/projects/html/jago-welfare/assets/img/volunteer/volunteer-4.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>Mark carson</h3>
                  <p>projects manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
