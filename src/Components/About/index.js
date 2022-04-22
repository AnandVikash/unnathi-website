import React from "react";
import OurBenifits from "./OurBenifits";
import WhoWeAre from "./WhoAreWe";
import SecTitle from "../Assets/ElementsUi/SecTitle";
import styles from "./about.module.css";

export default function index() {
  return (
    <>
      <div className={styles.aboutMainContainer}>
        <div className={styles.aboutTopContainer}>
          <div className={styles.aboutTopContaineroverlay}>
            <SecTitle text="About Us" tag="h3" colors="white" />
          </div>
        </div>
      </div>
      <OurBenifits />
      <WhoWeAre />
    </>
  );
}
