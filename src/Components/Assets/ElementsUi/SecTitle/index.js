import React from "react";
import styles from "./secTitle.module.css";
export default function SecTitle(props) {
  let {
    title,
    titleTag: TitleTag,
    titleColor,
    text,
    textTag: TextTag,
    textColor,
    textAlign,
  } = props;
  return (
    <>
      <div className={styles.SecTitleContainer} style={{ textAlign }}>
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
