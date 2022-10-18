import React from "react";
import styles from "./youtube.module.css";
import BannerTitle from "../../../Assets/ElementsUi/BannerTitle/Index";
import YouTubeData from "../../../Assets/Data/Media/youtube.json";
// import AffirmaionsImage from "../../../Assets/Data/Media/affirmations.json";
// import { FaHandPointRight } from "react-icons/fa";
export default function Index() {
  // console.log(YouTubeData);
  return (
    <>
      <BannerTitle
        title="Youtube Links"
        titleTag="h1"
        titleColor="#fff"
        localImg="gallery-1.jpg"
        imgColor="696969"
      />
      <div className={styles.youtubeMainContainer}>
        <div className={styles.youtubeAlphaConatiner}>
          {YouTubeData.map((item) => {
            return (
              <>
                <div>
                  <div className={styles.youtubeItemContainer}>
                    <iframe
                      width="100%"
                      height="210px"
                      srcdoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${item.youTube}/?autoplay=1><img src=https://img.youtube.com/vi/${item.youTube}/hqdefault.jpg alt='AltTagContent'><span>▶</span></a>`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <div className={styles.youtubeSubItem}>
                      <p>Lorem ipsum</p>
                    </div>
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
