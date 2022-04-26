import React from "react";
import styles from "./contactCard.module.css";
import { HiOutlineMail } from "react-icons/hi";
export default function index() {
  return (
    <>
      <div className={styles.contactCardMainContainer}>
        <div className={styles.contactCardContainer}>
          <div className={styles.card1}>
            <div className={styles.cardIcon}>
              <HiOutlineMail />
            </div>
            <div className={styles.cardText}>
              <h5>EMAIL:</h5>
              <p>phloxtheme@averta.com</p>
              <p>phlox@averta.com</p>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.cardIcon}>
              <HiOutlineMail />
            </div>
            <div className={styles.cardText}>
              <h5>EMAIL:</h5>
              <p>phloxtheme@averta.com</p>
              <p>phlox@averta.com</p>
            </div>
          </div>
          <div className={styles.card3}>
            <div className={styles.cardIcon}>
              <HiOutlineMail />
            </div>
            <div className={styles.cardText}>
              <h5>EMAIL:</h5>
              <p>phloxtheme@averta.com</p>
              <p>phlox@averta.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1029.430671456019!2d77.58409477672215!3d13.060305427113914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172f44d9b4e3%3A0xe030d06c3f7cc0f3!2sDigikit%20-%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1650964391652!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
}
