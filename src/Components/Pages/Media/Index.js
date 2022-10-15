import React from "react";
import styles from "./media.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import { FaHandPointRight } from "react-icons/fa";
import MediaImage from "../../Assets/Data/Media/media.json";
export default function Index() {
  // console.log(MediaImage);
  return (
    <>
      <BannerTitle
        title="Media"
        titleTag="h1"
        titleColor="#fff"
        localImg="gallery-1.jpg"
        imgColor="696969"
      />
      <div className={styles.MediaContainer}>
        <div className={styles.MediaImageContainer}>
          {MediaImage.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <div className={styles.MediaImageItem}>
                    {" "}
                    <img
                      src={require(`../../Assets/Media/mediaImages/${item.imgName}`)}
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
