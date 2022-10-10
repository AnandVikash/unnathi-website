import React, { useState, useEffect, useRef } from "react";
import styles from "./Events.module.css";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";

import events from "../../../Assets/Home/Events/events.jpeg";
import { IoLocationSharp } from "react-icons/io5";

export default function Index() {
  return (
    <>
      <div className={styles.EventsAlphaContainer}>
        <div className={styles.EventMainContainer}>
          <SecTitle
            title="Events"
            titleTag="p"
            titleColor="#808080"
            text="ACTION THAT SPEAKS ABOUT US"
            textTag="p"
            textColor="#000"
          />

          <div className={styles.EventItemsContainer}>
            <div className={styles.EventItems}>
              <div className={styles.EventVerticalCard}>
                <img src={events} />
                <div className={styles.EventVerticleContent}>
                  <div className={styles.EventVerticleDesc}>
                    <span className={styles.EventVerticalTags}>
                      #ONE HEALER PER FAMILY
                    </span>
                    <p>Full moon day meditation</p>
                  </div>
                  <div className={styles.EventVerticleDate}>
                    <div className={styles.EventVerticleCircleDate}>
                      9th <br /> Oct
                    </div>
                  </div>
                </div>
                <p className={styles.EventsVerticleCardDesc}>
                  1,00,000 individuals were trained in Pranic and Yogic Healing
                  in Bangalore, Mysore, Davanagere, Bellary, Raichur ,
                  Mangalore, Sirsi, Belagavi, Hassan, Koppal from 2001
                </p>
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
            <div className={styles.EventItems}>
              <div className={styles.EventHorizontalCardContainer}>
                <div className={styles.EventHorizontalItems}>
                  <div className={styles.EventHorizontalCard}>
                    <div className={styles.EventHorizontalContent}>
                      <div className={styles.EventHorizontalDesc}>
                        <p>Run for the senior citizens.</p>
                        <span className={styles.EventHorizontalTags}>
                          Yogic Crystal Healing and Yogic Psychic Self Defence
                        </span>
                      </div>
                      <div className={styles.EventHorizontalDate}>
                        <div className={styles.EventHorizontalCircleDate}>
                          15th – 16th <br />
                          Oct 2022
                        </div>
                      </div>
                    </div>
                    <p className={styles.EventsHorizontalCardDesc}>
                      1,00,000 individuals were trained in Pranic and Yogic
                      Healing in Bangalore, Mysore, Davanagere, Bellary, Raichur
                      , Mangalore, Sirsi, Belagavi, Hassan, Koppal from 2001
                    </p>
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
                        <p>Full moon day meditation</p>
                        <span className={styles.EventHorizontalTags}>
                          #REGULAR EVENTS AT UNNATHI HEALING FOUNDATION
                        </span>
                      </div>
                      <div className={styles.EventHorizontalDate}>
                        <div className={styles.EventHorizontalCircleDate}>
                          8th Nov
                          <br />
                          2022
                        </div>
                      </div>
                    </div>
                    <p className={styles.EventsHorizontalCardDesc}>
                      1,00,000 individuals were trained in Pranic and Yogic
                      Healing in Bangalore, Mysore, Davanagere, Bellary, Raichur
                      , Mangalore, Sirsi, Belagavi, Hassan, Koppal from 2001
                    </p>
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
