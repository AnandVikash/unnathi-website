import React from "react";
import BgTitle from "../../Assets/ElementsUi/BgTitle";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import HrLine from "../../Assets/ElementsUi/HrLine";
import styles from "./whoAreWe.module.css";
export default function index() {
  return (
    <>
      <div className={styles.whoMainContainer}>
        <div className={styles.whoContainer}>
          <div className={styles.whoImgContainer}>
            <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/Mask-Group-43@2x.jpg" />
          </div>
          <div className={styles.whoTextContainer}>
            <div className={styles.whoText}>
              <BgTitle text="OUR BENEFITS" length="3" tag="p" secColor="#fff" />
              <br />
              <br />
              <SecTitle text="Why You Choose Us?" tag="h3" colors="#347deb" />
              <br />
              <br />
              <HrLine height="5px" width="20%" color="#ccc" />
              <br />
              <br />
              <p>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec
                Turpis Dolor, Mit Malesuada Non Leo A, Vehicula Ornare Nibh.
                Integer Eget Bibendum Nulla, Neced Hendrerit Magna. Nunc Vitae
                Ipsum Interdum, Varius Magna Ut, Sollicitudin Nunc. Pellentesque
                Habitant Morbi Tristique Senectus Et.Lorem Ipsum Dolor Sit Amet,
                Consectetur Adipiscing Elit. Donec Turpis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
