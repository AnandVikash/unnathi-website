import React from "react";
import styles from "./welcome.module.css";
export default function Index() {
  return (
    <>
      <div className={styles.WelcomeMainContainer}>
        <div className={styles.welcomeContainer}>
          <div className={styles.welcome_item}>
            <img src="https://andit.co/projects/html/jago-welfare/assets/img/common/about.png"></img>
          </div>
          <div className={styles.welcome_item}>
            <p>Welcome to Jago</p>
            <h1>A world where poverty will not exists</h1>
            <h2>We are the largest crowdfunding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
              sed do eiusmod tempor incididunt ut labore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
              sed do eiusmod tempor incididunt ut labore et simply free text
              dolore magna aliqua lonm andhn. Lorem ipsum dolor sit amet,
              consectetur notted adipisicing elit sed do eiusmod tempor
              incididunt ut labore et simply.
            </p>
            <div className={styles.welcome_SubContent}>
              <button>Learn more</button>
              <a>How we work</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
