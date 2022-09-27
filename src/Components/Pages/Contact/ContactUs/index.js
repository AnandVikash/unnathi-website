import React from "react";
import styles from "./contactUs.module.css";
import BgTitle from "../../Assets/ElementsUi/BgTitle";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import HrLine from "../../Assets/ElementsUi/HrLine";
export default function index() {
  return (
    <>
      <div className={styles.contactUsMainContainer}>
        <div className={styles.contactUsContainer}>
          <div className={styles.contactTextContainer}>
            <BgTitle text="OUR BENEFITS" length="3" tag="p" secColor="#000" />
            <br />
            <br />
            <SecTitle text="Please Get In Touch" tag="h3" colors="#000" />
            <br />
            <br />
            <HrLine height="5px" width="20%" color="#ccc" />
            <br />
            <br />
            <p>
              Our Mission Is To Provide Quality English Language Instruction
              Through A Variety.
            </p>
          </div>
          <div className={styles.contactImageContainer}>
            <img src="https://demo.phlox.pro/corporate-pro/wp-content/uploads/sites/150/2020/02/Mask-Group-422@2x.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
