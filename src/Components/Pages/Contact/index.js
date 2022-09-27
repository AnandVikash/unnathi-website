import React from "react";
import BgTitle from "../Assets/ElementsUi/BgTitle";
import SecTitle from "../Assets/ElementsUi/SecTitle";
import HrLine from "../Assets/ElementsUi/HrLine";
import ContactUs from "./ContactUs";
import ContactCard from "./ContactCards";
import styles from "./contact.module.css";

export default function index() {
  return (
    <>
      <div className={styles.contactMainContainer}>
        <div className={styles.contactTopContainer}>
          <div className={styles.contactTopContaineroverlay}>
            <SecTitle text="Contact Us" tag="h3" colors="white" />
          </div>
        </div>
        <ContactUs />
        <ContactCard />
      </div>
    </>
  );
}
