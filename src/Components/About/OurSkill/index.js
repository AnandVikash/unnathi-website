import React from "react";
import styles from "./ourSkill.module.css";
export default function index() {
  return (
    <>
      <div className={styles.ourSkillMainContainer}>
        <div className={styles.ourSkillContainer}>
          <div className={styles.ourSkillText}></div>
          <div className={styles.ourSkillSkill}></div>
        </div>
      </div>
    </>
  );
}
