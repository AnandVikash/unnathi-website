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
          {/* <img src="https://andit.co/projects/html/jago-welfare/assets/img/icon/heading.png" /> */}
          {title}
        </TitleTag>
        <TextTag className={styles.SecTitleDesc} style={{ color: textColor }}>
          {text}
        </TextTag>
      </div>
    </>
  );
}
