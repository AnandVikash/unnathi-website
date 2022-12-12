import React, { useState } from "react";
import styles from "./affirmations.module.css";
// import BannerTitle from "../../../Assets/ElementsUi/BannerTitle/Index";
import AffirmaionsImage from "../../../Assets/Data/Media/affirmations.json";
import { FaHandPointRight } from "react-icons/fa";
export default function Index() {
  const [show, setShow] = useState(false);

  const AffirmaionsImageArray = show
    ? AffirmaionsImage
    : AffirmaionsImage.slice(0, 2);
  console.log(AffirmaionsImageArray);
  function showRemainingArray(id) {
    if (id === 2) {
      setShow(!show);
    }
  }
  return (
    <>
      {/* <BannerTitle
        title="Positive Affirmations"
        titleTag="h1"
        titleColor="#fff"
        localImg="gallery-1.jpg"
        imgColor="696969"
      /> */}
      <div className={styles.AffirmationsContainer}>
        <div className={styles.AffirmaionsImageContainer}>
          {AffirmaionsImageArray.map((item) => {
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

                  {/* onClick={() => showRemainingArray(item.id)} */}
                </div>
              </>
            );
          })}
          {!show && (
            <div>
              <button onClick={() => showRemainingArray(2)}>Show More</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
