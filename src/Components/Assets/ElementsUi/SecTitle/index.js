import React from "react";
import styles from "./secTitle.module.css";
export default function SecTitle({
  title,
  titleTag: TitleTag,
  titleColor,
  text,
  textTag: TextTag,
  textColor,
}) {
  return (
    <>
      {/* <Tag style={{ color: colors, fontWeight }} className={styles.tagstyles}>
        {text}
      </Tag> */}
      <div className={styles.SecTitleContainer}>
        <TitleTag className={styles.SecTitleText} style={{ color: titleColor }}>
          {title}
        </TitleTag>
        <TextTag className={styles.SecTitleDesc} style={{ color: textColor }}>
          {text}
        </TextTag>
      </div>
    </>
  );
}
