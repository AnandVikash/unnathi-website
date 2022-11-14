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
      <div className={styles.mediaAboutUs}>
        <p>
          The print and digital media in itself are very powerful tools that can
          be used to bring awareness about social causes, charitable events, and
          volunteering opportunities. Unnathi wishes to keep an archive of its
          presence in both printed and digital media in its web page. Here are
          few links to YouTube and pictures of news coverages This will seek
          attention of donors, volunteers to work with Unnathi. Unnathi invites
          funds from Organisation through its CSR to conduct its project “Build
          India Movement” across Karnataka.
        </p>
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
