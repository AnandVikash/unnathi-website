import React from "react";
import styles from "./BannerTitle.module.css";
export default function Index(props) {
  const { title, titleColor, img, imgColor, titleTag: TAG } = props;
  return (
    <>
      <div className={styles.BannerTitleContainer}>
        {/* <img src="https://dummyimage.com/1520x400/FF0000/090b2b.png" /> */}
        <img src={`https://dummyimage.com/1520x400/${imgColor}/090b2b.png`} />
        <div className={styles.BannerTitle}>
          <TAG className={styles.BannerTitleTag} style={{ color: titleColor }}>
            {title}
          </TAG>
        </div>
      </div>
    </>
  );
}
