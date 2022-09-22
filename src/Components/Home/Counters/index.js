import React, { useState, useEffect, useRef } from "react";
import styles from "./Counters.module.css";
import SecTitle from "../../Assets/ElementsUi/SecTitle";
import buildIndiaMovement from "../../Assets/Home/Projects/build-india-movement.jpeg";

import { MdOutlineSchool } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

export default function Index() {
  for (let i = 0; i < 100; i += 10) {
    console.log(i);
  }
  return (
    <>
      <div className={styles.CountersAlphaContainer}>
        <SecTitle
          title=""
          titleTag="p"
          titleColor="#808080"
          text="Unnathi In Numbers"
          textTag="p"
          textColor="#000"
        />
        <div className={styles.CountersMainContainer}>
          <div className={styles.CountersItem}>
            <BsPeople />
            <span>10000 </span>
            <p>NUMBER OF YOUTH / ADOLESCENTS COUNSELLED</p>
          </div>
          <div className={styles.CountersItem}>
            <FaRegHandshake />
            <span>4000 </span>
            <p>NUMBER OF UNDERGRADS TRAINED</p>
          </div>
          <div className={styles.CountersItem}>
            <MdOutlineSchool />
            <span>70 </span>
            <p>NUMBER OF SCHOOLS / COLLEGES REACHED</p>
          </div>
        </div>
      </div>
    </>
  );
}
