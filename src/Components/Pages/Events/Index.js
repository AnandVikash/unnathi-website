import React from "react";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";

import styles from "./events.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import events from "../../Assets/Home/Events/events.jpeg";

export default function index() {
  return (
    <>
      <BannerTitle
        title="Events"
        titleTag="h1"
        titleColor="#fff"
        localImg="events-banner.jpg"
        imgColor="696969"
      />
      <SecTitle
        title="Our Events"
        titleTag="p"
        titleColor="#808080"
        text="Check About Our Events"
        textTag="p"
        textColor="#000"
      />
      <div className={styles.EventsMainContainer}>
        <div className={styles.EventsContainer}>
          <div>
            <div className={styles.EventVerticalCard}>
              <div className={styles.EventVerticalCardImg}>
                <img src={events} />
              </div>
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
                1,00,000 individuals were trained in Pranic and Yogic Healing in
                Bangalore, Mysore, Davanagere, Bellary, Raichur , Mangalore,
                Sirsi, Belagavi, Hassan, Koppal from 2001
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
          <div>
            {" "}
            <div className={styles.EventVerticalCard}>
              <div className={styles.EventVerticalCardImg}>
                <img src={events} />
              </div>
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
                1,00,000 individuals were trained in Pranic and Yogic Healing in
                Bangalore, Mysore, Davanagere, Bellary, Raichur , Mangalore,
                Sirsi, Belagavi, Hassan, Koppal from 2001
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
          <div>
            {" "}
            <div className={styles.EventVerticalCard}>
              <div className={styles.EventVerticalCardImg}>
                <img src={events} />
              </div>
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
                1,00,000 individuals were trained in Pranic and Yogic Healing in
                Bangalore, Mysore, Davanagere, Bellary, Raichur , Mangalore,
                Sirsi, Belagavi, Hassan, Koppal from 2001
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
    </>
  );
}
