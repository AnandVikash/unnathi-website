import React from "react";
import BgTitle from "../../Assets/ElementsUi/BgTitle";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import HrLine from "../../Assets/ElementsUi/HrLine";
import styles from "./banner.module.css";
export default function index() {
  return (
    <>
      <div className={styles.bannerMainContainer}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerContent}>
            <div className={styles.bannerContentText}>
              <BgTitle
                text="BEST BUSINESS"
                length="4"
                tag="p"
                textColor="white"
                secColor="black"
                backgroundColor="#005bea"
              />
              <br />
              <br />
              <SecTitle
                text="We're Equally Excited About Corporate"
                tag="h3"
                colors="black"
              />
              <br />

              <HrLine height="5px" width="25%" color="#ccc" />
            </div>
            <div className={styles.bannerContentImage}>
              <img
                className={styles.bannerContentImg}
                src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/11/programmers-cooperating-at-information-technology-JCZRMFE-test.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
