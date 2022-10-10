import React from "react";
import styles from "./BannerTitle.module.css";
export default function Index(props) {
  const { title, titleColor, localImg, img, imgColor, titleTag: TAG } = props;

  return (
    <>
      <div className={styles.BannerTitleContainer}>
        <div className={styles.someimg}></div>
        {/* <img src={`https://dummyimage.com/1520x400/${imgColor}/090b2b.png`} /> */}
        {img && (
          <img src={`https://dummyimage.com/1520x400/${imgColor}/090b2b.png`} />
        )}
        {localImg && (
          <img
            className={styles.LocalBannerImg}
            src={require(`../../PageBanners/${localImg}`)}
          />
        )}
        <div className={styles.BannerTitle}>
          <TAG className={styles.BannerTitleTag} style={{ color: titleColor }}>
            {title}
          </TAG>
        </div>
      </div>
    </>
  );
}
