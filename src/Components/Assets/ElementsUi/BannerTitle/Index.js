import React from "react";
import styles from "./BannerTitle.module.css";
export default function Index(props) {
  const { title, titleColor, img } = props;
  console.log(title);
  return (
    <>
      <div className={styles.BannerTitleContainer}>
        <img src="https://dummyimage.com/1520x400/ff00ff/090b2b.png" />
        <div className={styles.BannerTitle}>
          <h3 style={{ color: titleColor }}>{title}</h3>
        </div>
      </div>
    </>
  );
}
