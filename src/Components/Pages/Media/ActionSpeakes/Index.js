import React from "react";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";
import BannerTitle from "../../../Assets/ElementsUi/BannerTitle/Index";

import styles from "./events.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import events from "../../../Assets/Home/Events/events.jpeg";
import eventsData from "../../../Assets/Data/ActionSpeakAboutUs/events.json";
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="ACTION THAT SPEAKS ABOUT US "
        titleTag="h1"
        titleColor="#fff"
        localImg="events-banner.jpg"
        imgColor="696969"
      />
      <SecTitle
        title=""
        titleTag="p"
        titleColor="#808080"
        text="Our Actions"
        textTag="p"
        textColor="#000"
      />
      <div className={styles.EventsMainContainer}>
        <div className={styles.EventsContainer}>
          {eventsData.map((item) => {
            const {
              id,
              title,
              excerpt,
              location,
              date,
              fullDate,
              link,
              time,
              bannerCustomImg,
            } = item;
            return (
              <>
                <div key={id}>
                  <div className={styles.EventVerticalCard}>
                    <div className={styles.EventVerticalCardImg}>
                      <img
                        src={require(`../../../Assets/Media/actionSpeakes/${bannerCustomImg}`)}
                      />
                    </div>
                    <div className={styles.EventVerticleContent}>
                      <div className={styles.EventVerticleDesc}>
                        <Link
                          to={`/media/action-that-speakes-about-us/${link}/${id}`}
                        >
                          <p>{title.substring(0, 35)}...</p>
                        </Link>
                      </div>
                      <div className={styles.EventVerticleDate}>
                        {/* <div className={styles.EventVerticleCircleDate}>
                          {date}
                        </div> */}
                      </div>
                    </div>
                    <p className={styles.EventsVerticleCardDesc}>
                      {excerpt.substring(0, 180)}....
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
