import React, { useState, useEffect, useRef } from "react";
import styles from "./Donation.module.css";
import Button from "../../Assets/ElementsUi/Button";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import events from "../../Assets/Home/Events/events.jpeg";
import { IoLocationSharp } from "react-icons/io5";

export default function Index() {
  return (
    <>
      <div className={styles.DonationMainContainer}>
        <div className={styles.DonationTextContainer}>
          <div className={styles.DonationTitle}>
            We are here to help Youngsters lead a better life
          </div>
          <div className={styles.DonationDesc}>
            We are fundraising for the <span>Young Children</span> who are
            fighting against mental health
          </div>
          <div className={styles.DonationButton}>
            <Button
              btntext="Donate Now"
              bgcolor="rgb(9, 50, 76)"
              hoverBgColor="#fff"
              color="#fff"
              hoverColor="#A82C24"
            />
          </div>
        </div>
      </div>
    </>
  );
}
