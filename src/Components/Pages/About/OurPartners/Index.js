import React from "react";
import styles from "./ourPartners.module.css";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";

export default function Index() {
  return (
    <>
      <div className={styles.ourPartnersMainContainer}>
        <div className={styles.ourPartnersContainer}>
          <SecTitle
            title="Why partner with us?"
            titleTag="p"
            titleColor="#808080"
            text="What our valuable partner think about us"
            textTag="p"
            textColor="#000"
          />
        </div>
        <div className={styles.ourProjectsMembers}>
          <div className={styles.ourProjectsContent}>
            <div>
              <div className={styles.ourSections}>
                <div>
                  <img
                    src="https://andit.co/projects/html/jago-welfare/assets/img/testimonial/test-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum corrupti ad labore excepturi cum veritatis nisi, error
                    architecto ipsam explicabo sint,
                  </h4>
                </div>
                <div>
                  <h3>Adam brown</h3>
                  <p>Investor</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.ourSections}>
                <div>
                  <img
                    src="https://andit.co/projects/html/jago-welfare/assets/img/testimonial/test-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum corrupti ad labore excepturi cum veritatis nisi, error
                    architecto ipsam explicabo sint,
                  </h4>
                </div>
                <div>
                  <h3>Adam brown</h3>
                  <p>Investor</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.ourSections}>
                <div>
                  <img
                    src="https://andit.co/projects/html/jago-welfare/assets/img/testimonial/test-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum corrupti ad labore excepturi cum veritatis nisi, error
                    architecto ipsam explicabo sint,
                  </h4>
                </div>
                <div>
                  <h3>Adam brown</h3>
                  <p>Investor</p>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.ourSections}>
                <div>
                  <img
                    src="https://andit.co/projects/html/jago-welfare/assets/img/testimonial/test-1.png"
                    alt=""
                  />
                </div>
                <div>
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum corrupti ad labore excepturi cum veritatis nisi, error
                    architecto ipsam explicabo sint,
                  </h4>
                </div>
                <div>
                  <h3>Adam brown</h3>
                  <p>Investor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
