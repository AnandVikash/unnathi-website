import React, { useState, useEffect, useRef } from "react";
import styles from "./Events.module.css";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";

import events from "../../../Assets/Media/actionSpeakes/kriya-shakthi.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div className={styles.EventsAlphaContainer}>
        <div className={styles.EventMainContainer}>
          <SecTitle
            title=""
            titleTag="p"
            titleColor="#808080"
            text="ACTION THAT SPEAKS ABOUT US"
            textTag="p"
            textColor="#000"
          />

          <div className={styles.EventItemsContainer}>
            <div
              className={styles.EventItems}
              data-aos="fade-up-right"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <div className={styles.EventVerticalCard}>
                <img src={events} />
                <div className={styles.EventVerticleContent}>
                  <div className={styles.EventVerticleDesc}>
                    <p>Kriyashakti...</p>
                  </div>
                  <div className={styles.EventVerticleDate}>
                    {/* <div className={styles.EventVerticleCircleDate}>
                      9th <br /> Oct
                    </div> */}
                  </div>
                </div>

                <p className={styles.EventsVerticleCardDesc}>
                  It is a wonderful process of manifesting one’s wishes and
                  desires through a process revealed by spiritually evolved
                  people. In Kriyashakti, one is empowered to remove the
                  hindranc....
                </p>
                <div className={styles.EventItemLink}>
                  <Link to="/media/action-that-speakes-about-us/">
                    Read More
                  </Link>
                </div>

                <hr />
                <div className={styles.EventsAddressItemContainer}>
                  <div className={styles.EventsAddressItem}>
                    <div className={styles.EventsAddresIcon}>
                      <IoLocationSharp />
                    </div>
                    <div className={styles.EventsAddresDesc}>
                      <p>Location</p>
                      <p>Bengaluru</p>
                    </div>
                  </div>
                  <div className={styles.EventsAddressItem}>
                    <div className={styles.EventsAddressItem}>
                      <div className={styles.EventsAddresIcon}>
                        <IoLocationSharp />
                      </div>
                      <div className={styles.EventsAddresDesc}>
                        <p>Location</p>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.EventItems}
              data-aos="fade-up-left"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <div className={styles.EventHorizontalCardContainer}>
                <div className={styles.EventHorizontalItems}>
                  <div className={styles.EventHorizontalCard}>
                    <div className={styles.EventHorizontalContent}>
                      <div className={styles.EventHorizontalDesc}>
                        <p>Faculty Development Program – BNU...</p>
                      </div>
                      <div className={styles.EventHorizontalDate}>
                        {/* <div className={styles.EventHorizontalCircleDate}>
                          15th <br />
                          Oct 2022
                        </div> */}
                      </div>
                    </div>
                    <p className={styles.EventsHorizontalCardDesc}>
                      Faculty Development Program enhances the inbuilt qualities
                      of a faculty to make a positive impact on their students.
                      It improves the reasoning capacity,
                    </p>
                    <div className={styles.EventItemLink}>
                      <Link to="/media/action-that-speakes-about-us/">
                        Read More
                      </Link>
                    </div>
                    <hr />

                    <div className={styles.EventsAddressItemContainer}>
                      <div className={styles.EventsAddressItem}>
                        <div className={styles.EventsAddresIcon}>
                          <IoLocationSharp />
                        </div>
                        <div className={styles.EventsAddresDesc}>
                          <p>Location</p>
                          <p>Bengaluru</p>
                        </div>
                      </div>
                      <div className={styles.EventsAddressItem}>
                        <div className={styles.EventsAddressItem}>
                          <div className={styles.EventsAddresIcon}>
                            <IoLocationSharp />
                          </div>
                          <div className={styles.EventsAddresDesc}>
                            <p>Location</p>
                            <p>Bengaluru</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.EventHorizontalItems}>
                  <div className={styles.EventHorizontalCard}>
                    <div className={styles.EventHorizontalContent}>
                      <div className={styles.EventHorizontalDesc}>
                        <p>Build India Movement (BIM)...</p>
                      </div>
                      <div className={styles.EventHorizontalDate}>
                        {/* <div className={styles.EventHorizontalCircleDate}>
                          8th Nov
                          <br />
                          2022
                        </div> */}
                      </div>
                    </div>
                    <p className={styles.EventsHorizontalCardDesc}>
                      BIM empowers adolescent children and dispels ignorance and
                      fears related to hygiene, social taboo, social
                      insecurities. BIM also helps in
                    </p>
                    <div className={styles.EventItemLink}>
                      <Link to="/media/action-that-speakes-about-us/">
                        Read More
                      </Link>
                    </div>
                    <hr />

                    <div className={styles.EventsAddressItemContainer}>
                      <div className={styles.EventsAddressItem}>
                        <div className={styles.EventsAddresIcon}>
                          <IoLocationSharp />
                        </div>
                        <div className={styles.EventsAddresDesc}>
                          <p>Location</p>
                          <p>Bengaluru</p>
                        </div>
                      </div>
                      <div className={styles.EventsAddressItem}>
                        <div className={styles.EventsAddressItem}>
                          <div className={styles.EventsAddresIcon}>
                            <IoLocationSharp />
                          </div>
                          <div className={styles.EventsAddresDesc}>
                            <p>Location</p>
                            <p>Bengaluru</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
