import React from "react";
import styles from "./Title.module.css";
export default function Title({ text, length }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <span className={styles.backgroundColor}>
          {text.substring(0, length)}
        </span>
        <span>{text.substring(length, Infinity)}</span>
      </div>
    </>
  );
}
