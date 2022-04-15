import React from "react";
import styles from "./secTitle.module.css";
export default function SecTitle({ text, tag: Tag, colors }) {
  console.log(colors);
  return (
    <>
      <Tag style={{ color: colors }} className={styles.tagstyles}>
        {text}
      </Tag>
    </>
  );
}
