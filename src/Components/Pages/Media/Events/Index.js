import React from "react";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";
// import BannerTitle from "../../../Assets/ElementsUi/BannerTitle/Index";

import styles from "./events.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import events from "../../../Assets/Home/Events/events.jpeg";
import eventsData from "../../../Assets/Data/Events/events.json";
export default function index() {
  return (
    <>
      {/* <BannerTitle
        title="Events"
        titleTag="h1"
        titleColor="#fff"
        localImg="events-banner.jpg"
        imgColor="696969"
      /> */}
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
          {eventsData.map((item) => {
            const {
              id,
              title,
              titleTag,
              excerpt,
              location,
              date,
              fullDate,
              time,
              bannerCustomTitle,
            } = item;
            return (
              <>
                <div key={id}>
                  <div className={styles.EventVerticalCard}>
                    <div className={styles.EventVerticalCardImg}>
                      <img src={events} />
                    </div>
                    <div className={styles.EventVerticleContent}>
                      <div className={styles.EventVerticleDesc}>
                        <span className={styles.EventVerticalTags}>
                          {titleTag}
                        </span>
                        <p>{title.substring(0, 35)}...</p>
                      </div>
                      <div className={styles.EventVerticleDate}>
                        <div className={styles.EventVerticleCircleDate}>
                          {date}
                        </div>
                      </div>
                    </div>
                    <p className={styles.EventsVerticleCardDesc}>
                      {excerpt.substring(0, 180)}
                    </p>
                    <hr />
                    <div className={styles.EventsAddressItemContainer}>
                      <div className={styles.EventsAddressItem}>
                        <div className={styles.EventsAddresIcon}>
                          <IoLocationSharp />
                        </div>
                        <div className={styles.EventsAddresDesc}>
                          <p>Location</p>
                          <p>{location}</p>
                        </div>
                      </div>
                      <div className={styles.EventsAddressItem}>
                        <div className={styles.EventsAddressItem}>
                          <div className={styles.EventsAddresIcon}>
                            <IoLocationSharp />
                          </div>
                          <div className={styles.EventsAddresDesc}>
                            <p>Date</p>
                            <p>{fullDate}</p>
                          </div>
                        </div>
                      </div>
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
