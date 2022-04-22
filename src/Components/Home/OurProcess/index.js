import React from "react";
import styles from "./process.module.css";
import BgTitle from "../../ElementsUi/BgTitle";
import SecTitle from "../../ElementsUi/SecTitle";
import HrLine from "../../ElementsUi/HrLine";
export default function index() {
  return (
    <>
      <div className={styles.ourProcessMainContainer}>
        <div className={styles.ourProcessContainer}>
          <div className={styles.ourTopContainer}>
            <div className={styles.ourTopColOne}>
              <BgTitle
                text="OUR PROCESS "
                length="3"
                tag="p"
                textColor="black"
                secColor="black"
                backgroundColor="#ffe91c"
              />
              <br />
              <SecTitle
                text="The Exceptional Craftsmen Of Work Us"
                tag="h3"
                colors="black"
              />
              <br />
              <HrLine height="5px" width="25%" color="#ccc" />
            </div>
            <div className={styles.ourTopColTwo}>
              <p>
                Our mission is to provide quality English language instruction
                through a variety of courses to international and local students
                in a professional and supportive atmosphere utilizing our unique
                English teaching methodology.Our mission is to provide.
              </p>
            </div>
          </div>
          <div className={styles.ourBottomContainer}>
            <div className={styles.ourBottomPrimaryOne}>
              <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/co-workers-working-together-PRZ8DTV@2x.jpg" />
            </div>
            <div className={styles.ourBottomPrimaryTwo}>
              <div className={styles.cardContainer}>
                <div className={styles.cards}>
                  <div className={styles.cardsImage}>
                    <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/Significon-Bulb.png" />
                  </div>
                  <div className={styles.cardsText}>
                    <h2>01. Build Prototypes</h2>
                    <p>
                      Our mission is to provide quality English language
                      instruction
                    </p>
                  </div>
                </div>
                <div className={styles.cards}>
                  <div className={styles.cardsImage}>
                    <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/Significon-Bulb.png" />
                  </div>
                  <div className={styles.cardsText}>
                    <h2>01. Build Prototypes</h2>
                    <p>
                      Our mission is to provide quality English language
                      instruction
                    </p>
                  </div>
                </div>
                <div className={styles.cards}>
                  <div className={styles.cardsImage}>
                    <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/Significon-Bulb.png" />
                  </div>
                  <div className={styles.cardsText}>
                    <h2>01. Build Prototypes</h2>
                    <p>
                      Our mission is to provide quality English language
                      instruction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
