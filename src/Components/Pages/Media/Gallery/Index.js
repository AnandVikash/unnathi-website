import React from "react";
import styles from "./gallery.module.css";
import BannerTitle from "../../../Assets/ElementsUi/BannerTitle/Index";
import GalleryData from "../../../Assets/Data/Media/gallery.json";
import { FaHandPointRight } from "react-icons/fa";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="Gallery"
        titleTag="h1"
        titleColor="#fff"
        img="090b2b.png"
        imgColor="696969"
      />
      <div className={styles.GalleryMainContainer}>
        <div className={styles.GalleryContainer}>
          <div className={styles.GalleryButtonContainer}>
            {GalleryData.map((item) => {
              return (
                <>
                  <div>
                    <a href={`#${item.imgFolder.toLowerCase()}`}>{item.name}</a>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styles.GalleryImgMainContainer}>
            {GalleryData.map((item) => {
              console.log();
              return (
                <>
                  <p>{item.name}</p>
                  <div
                    className={styles.GalleryImgContainer}
                    id={`${item.imgFolder.toLowerCase()}`}
                  >
                    {item.imagnames.map((subItems) => {
                      return (
                        <>
                          <div className={styles.GalleryImages}>
                            <img
                              loading="lazy"
                              src={require(`../../../Assets/Media/Gallery/${item.imgFolder}/${subItems.imgName}`)}
                            />
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
