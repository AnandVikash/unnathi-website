import React from "react";
import styles from "./gallery.module.css";
import BannerTitle from "../../../Assets/ElementsUi/BannerTitle/Index";
import GalleryData from "../../../Assets/Data/Media/gallery.json";
export default function Index() {
  //   console.log(GalleryData);
  //   GalleryData.map((item) => {
  //     console.log(item.name);
  //   });
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
                  <a href={`#${item.imgFolder.toLowerCase()}`}>{item.name}</a>
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
                              src={require(`../../../Assets/Media/${item.imgFolder}/${subItems.imgName}`)}
                            />
                            {/* <div>{subItems.imgTitle}</div> */}
                          </div>
                        </>
                      );
                    })}
                    <br />
                    <br />
                    <br />
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
