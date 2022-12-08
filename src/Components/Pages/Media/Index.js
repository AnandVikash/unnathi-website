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
        titleColor="rgb(9, 50, 76)"
        localImg="media.jpg"
        imgColor="696969"
      />
      <div className={styles.mediaAboutUs}>
        <p>We thank media and press for covering our good work extensively.</p>
      </div>
      <div className={styles.MediaContainer}>
        <div className={styles.MediaImageContainer}>
          {MediaImage.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <div className={styles.MediaImageItem}>
                    {" "}
                    <img
                      loading="lazy"
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
