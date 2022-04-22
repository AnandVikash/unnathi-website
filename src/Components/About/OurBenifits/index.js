import React from "react";
import styles from "./ourBenifits.module.css";
import BgTitle from "../../Assets/ElementsUi/BgTitle";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import HrLine from "../../Assets/ElementsUi/HrLine";
import { FiStar } from "react-icons/fi";
export default function index() {
  return (
    <>
      <section className={styles.ourBenifitsMainContainer}>
        <div className={styles.ourBenifitsContainer}>
          <div className={styles.ourBenifitsTextCon}>
            <BgTitle text="OUR BENEFITS" length="3" tag="p" />
            <br />
            <br />
            <SecTitle text="Why You Choose Us?" tag="h3" colors="#347deb" />
            <br />
            <br />
            <HrLine height="5px" width="20%" color="#ccc" />

            <div className={styles.cardMainContainer}>
              <div className={styles.cardContainer}>
                <div className={styles.imgCard}>
                  <FiStar />
                </div>
                <div className={styles.textCard}>
                  <h4>Top-notch design</h4>
                  <p>
                    Our mission is to provide quality English language
                    instruction throh a variety of courses.
                  </p>
                </div>
              </div>
              <div className={styles.cardContainer}>
                <div className={styles.imgCard}>
                  <FiStar />
                </div>
                <div className={styles.textCard}>
                  <h4>Top-notch design</h4>
                  <p>
                    Our mission is to provide quality English language
                    instruction throh a variety of courses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ourBenifitsImgCon}>
            <div>
              <img
                src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/Mask-Group-42222@2x-1024x1007.jpg"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
