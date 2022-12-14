import React from "react";
import styles from "./services.module.css";
import BgTitle from "../../Assets/ElementsUi/BgTitle";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import HrLine from "../../Assets/ElementsUi/HrLine";
export default function index() {
  return (
    <>
      <div className={styles.serviceMainContainer}>
        <div className={styles.servicesContainer}>
          <div>
            <BgTitle text="OUR SERVICES " length="3" tag="p" />

            <SecTitle
              text="Demand First-Rate Best Services"
              tag="h3"
              colors="#347deb"
            />
            <HrLine height="5px" width="20%" color="#ccc" />
            <div></div>
            <p>
              Our Mission Is To Provide Quality English Language Instruction
              Through A Variety Of Courses To International
            </p>
          </div>

          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImg}>
                <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/asian-businesswoman-laptop-planning-strategy-PQFT2HE@2x.jpg" />
              </div>
              <div className={styles.serviceCardText}>
                <div className={styles.serviceCardTitle}>Web Design</div>
                <div className={styles.serviceCardIcon}> ----&gt;</div>
              </div>
            </div>
          </div>

          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImg}>
                <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/asian-businesswoman-laptop-planning-strategy-PQFT2HE@2x.jpg" />
              </div>
              <div className={styles.serviceCardText}>
                <div className={styles.serviceCardTitle}>Web Design</div>
                <div className={styles.serviceCardIcon}> ----&gt;</div>
              </div>
            </div>
          </div>
          {/* <div>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <img
                  src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/Mask-Group-40@2x-402x391.jpg"
                  className={styles.cardImg}
                />
                <div className={styles.cardFooter1}>
                  <div className={styles.cardFooterText1}>
                    <div className={styles.cardFooterTitle1}>
                      Web Development
                    </div>
                    <div className={styles.cardFooterIcon1}>-----&gt;</div>
                  </div>
                </div>
                <div className={styles.cardFooter2}>
                  <div className={styles.cardFooterText2}>
                    <div className={styles.cardFooterIcon2}>-----&gt;</div>
                    <div className={styles.cardFooterTitle2}>
                      Web Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <img
                  src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/Mask-Group-40@2x-402x391.jpg"
                  className={styles.cardImg}
                />
                <div className={styles.cardFooter1}>
                  <div className={styles.cardFooterText1}>
                    <div className={styles.cardFooterTitle1}>
                      Web Development
                    </div>
                    <div className={styles.cardFooterIcon1}>-----&gt;</div>
                  </div>
                </div>
                <div className={styles.cardFooter2}>
                  <div className={styles.cardFooterText2}>
                    <div className={styles.cardFooterIcon2}>-----&gt;</div>
                    <div className={styles.cardFooterTitle2}>
                      Web Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className={styles.serviceCardContainer2}>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImg}>
                <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/asian-businesswoman-laptop-planning-strategy-PQFT2HE@2x.jpg" />
              </div>
              <div className={styles.serviceCardText}>
                <div className={styles.serviceCardTitle}>Web Design</div>
                <div className={styles.serviceCardIcon}> ----&gt;</div>
              </div>
            </div>
          </div>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImg}>
                <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/asian-businesswoman-laptop-planning-strategy-PQFT2HE@2x.jpg" />
              </div>
              <div className={styles.serviceCardText}>
                <div className={styles.serviceCardTitle}>Web Design</div>
                <div className={styles.serviceCardIcon}> ----&gt;</div>
              </div>
            </div>
          </div>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImg}>
                <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/01/asian-businesswoman-laptop-planning-strategy-PQFT2HE@2x.jpg" />
              </div>
              <div className={styles.serviceCardText}>
                <div className={styles.serviceCardTitle}>Web Design</div>
                <div className={styles.serviceCardIcon}> ----&gt;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
