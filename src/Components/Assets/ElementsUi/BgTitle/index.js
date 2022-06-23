import React from "react";
import styles from "./Title.module.css";
export default function BgTitle({
  text,
  length,
  tag: Tag,
  textColor,
  secColor,
  backgroundColor,
  secBackColor,
}) {
  return (
    <>
      <div className={styles.titleContainer}>
        <span
          className={styles.backgroundColor}
          style={{
            color: `${textColor}`,
            backgroundColor: `${backgroundColor}`,
          }}
        >
          {text.substring(0, length)}
        </span>
        <span
          style={{
            color: `${secColor}`,
          }}
        >
          {text.substring(length, Infinity)}
        </span>
      </div>
    </>
  );
}
