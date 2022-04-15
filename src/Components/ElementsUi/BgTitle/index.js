import React from "react";
import styles from "./Title.module.css";
export default function BgTitle({ text, length, tag, textColor }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <span
          className={styles.backgroundColor}
          style={{ color: `${textColor}` }}
        >
          {text.substring(0, length)}
        </span>
        <span>{text.substring(length, Infinity)}</span>
      </div>
    </>
  );
}
