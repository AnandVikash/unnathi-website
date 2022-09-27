import React from "react";
import styles from "./serviceTopSection.module.css";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import HrLine from "../../Assets/ElementsUi/HrLine";
export default function index() {
  return (
    <>
      <div className={styles.serviceTopMainContainer}>
        <div className={styles.serviceTopContainer}>
          <div className={styles.serviceTextContainer}>
            <div className={styles.serviceTextTitle}>
              <SecTitle
                text="We Are The Leader In Web Development"
                tag="h3"
                colors="#347deb"
              />
              <br />
              <br />
              <HrLine height="5px" width="20%" color="#ccc" />
            </div>
            <div className={styles.serviceTextDesc}>
              <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec
                Turpis Dolor, Mit Malesuada Non Leo A, Vehicula Ornare Nibh.
                Integer Eget Bibendum Nulla, Neced Hendrerit Magna. Nunc Vitae
                Ipsum Interdum, Varius Magna Ut, Sollicitudin Nunc. Pellentesque
                Habitant Morbi Tristique Senectus Et.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
