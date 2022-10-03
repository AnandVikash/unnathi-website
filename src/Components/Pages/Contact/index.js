import React from "react";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import styles from "./contact.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
export default function index() {
  return (
    <>
      <BannerTitle
        title="Contact"
        titleTag="h1"
        titleColor="#fff"
        img="090b2b.png"
        imgColor="696969"
      />
      <SecTitle
        title="Contact With Us"
        titleTag="p"
        titleColor="#808080"
        text="Get in touch with us & stay updates"
        textTag="p"
        textColor="#000"
      />
      <div className={styles.ContactMainContainer}>
        <div className={styles.ContactContainer}>
          <div className={styles.AddressContainer}>
            <div className={styles.AddressItemsContainers}>
              <div className={styles.AddressItemContainer}>
                <div className={styles.AddressItemIcon}>
                  <div className={styles.AddressIcon}>
                    <IoLocationSharp />
                  </div>
                </div>
                <div className={styles.AddressItemContent}>
                  <h3>Address</h3>
                  <p>
                    150, 2nd Floor, Above Vishwas Jewellers, Sanjay Nagar Main
                    Rd, AECS Layout, Bengaluru, Karnataka 560094
                  </p>
                </div>
              </div>
              <div className={styles.AddressItemContainer}>
                <div className={styles.AddressItemIcon}>
                  <div className={styles.AddressIcon}>
                    <FaEnvelope />
                  </div>
                </div>
                <div className={styles.AddressItemContent}>
                  <h3>Email</h3>
                  <p>healing.unnathi@gmail.com</p>
                </div>
              </div>
              <div className={styles.AddressItemContainer}>
                <div className={styles.AddressItemIcon}>
                  <div className={styles.AddressIcon}>
                    <BsTelephoneFill />
                  </div>
                </div>
                <div className={styles.AddressItemContent}>
                  <h3>Phone</h3>
                  <p>+91 9845426049</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.FormsMainContainer}>
            <div className={styles.FormsContainer}>
              <h3>Leave us a message</h3>
              <form>
                <div>
                  <input type="text" placeholder="Your Full Name" />
                </div>
                <div>
                  <input type="email" placeholder="Your Your Email" />
                </div>
                <div>
                  <input type="text" placeholder="Subject" />
                </div>
                <div>
                  <textarea rows="10" placeholder="Message" />
                </div>
                <div className={styles.FormSubmit}>
                  <input type="submit" value="Send Message" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0487346837067!2d77.57217662245661!3d13.032568561440383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e8059c75e1%3A0x20518939a8fddd6d!2sUnnathi%20Healing%20Foundation!5e0!3m2!1sen!2sin!4v1664643900028!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

{
  /* <div className={styles.AddressItems}>
<div className={styles.AddressItemIcon}>
  <div className={styles.AddressIcon}>
    <IoLocationSharp />
  </div>
</div>
<div className={styles.AddressItemContent}>
  <h3>Address</h3>
  <p>
    150, 2nd Floor, Above Vishwas Jewellers, Sanjay Nagar Main
    Rd, AECS Layout, Bengaluru, Karnataka 560094
  </p>
</div>
</div> */
}
