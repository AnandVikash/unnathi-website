import React from "react";
import styles from "./healing.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="Healing"
        titleTag="h1"
        titleColor="#fff"
        img="090b2b.png"
        imgColor="696969"
      />
      <div className={styles.HealingMainContainer}>
        <div className={styles.HealingContainer}></div>
      </div>
    </>
  );
}
