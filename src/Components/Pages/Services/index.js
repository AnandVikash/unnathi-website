import React from "react";
import styles from "./service.module.css";
import SecTitle from "../Assets/ElementsUi/SecTitle";
import ServiceTopSection from "./ServiceTopSection";
import ServiceCards from "./ServiceCards";
export default function index() {
  return (
    <>
      <div className={styles.serviceMainContainer}>
        <div className={styles.serviceTopContainer}>
          <div className={styles.serviceTopContaineroverlay}>
            <SecTitle text="Service" tag="h3" colors="white" />
          </div>
        </div>
        <ServiceTopSection />
        <ServiceCards />
      </div>
    </>
  );
}
