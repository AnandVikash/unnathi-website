import React from "react";
import styles from "./affirmations.module.css";
import BannerTitle from "../../../Assets/ElementsUi/BannerTitle/Index";
import AffirmaionsImage from "../../../Assets/Data/Media/affirmations.json";
import { FaHandPointRight } from "react-icons/fa";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="Positive Affirmations"
        titleTag="h1"
        titleColor="#fff"
        localImg="gallery-1.jpg"
        imgColor="696969"
      />
      <div className={styles.AffirmationsContainer}>
        <div className={styles.AffirmaionsImageContainer}>
          {AffirmaionsImage.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <div className={styles.AffirmaionsImage}>
                    <img
                      loading="lazy"
                      src={require(`../../../Assets/Media/PositiveAffirmations/${item.imgName}`)}
                    />
                    <p>{item.imgTitle}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
