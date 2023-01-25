import React, { useEffect } from "react";
import styles from "./Counters.module.css";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import SecTitle from "../../../Assets/ElementsUi/SecTitle"; 

import { MdOutlineSchool } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

export default function Index() {
  const { ref, inView } = useInView();
  console.log(inView.initialInView);
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
        <div className={styles.CountersMainContainer} ref={ref}>
          <div className={styles.CountersItem} >
            <BsPeople />
            <span>
              {inView && (
                <CountUp
                  suffix="+"
                  start={0}
                  end={10000}
                  delay={0}
                  duration={2}
                />
              )}
            </span>
            {/* <span>10000 </span> */}
            <p>NUMBER OF YOUTH / ADOLESCENTS COUNSELLED</p>
          </div>
          <div className={styles.CountersItem}>
            <FaRegHandshake />
            <span>
              {inView && (
                <CountUp
                  suffix="+"
                  start={0}
                  end={4000}
                  delay={0}
                  duration={2}
                />
              )}
            </span>
            {/* <span>4000 </span> */}
            <p>NUMBER OF UNDERGRADS TRAINED</p>
          </div>
          <div className={styles.CountersItem}>
            <MdOutlineSchool />
            <span>
              {inView && (
                <CountUp
                  suffix="+"
                  start={0}
                  end={70}
                  delay={0}
                  duration={2}
                />
              )}
            </span>
            {/* <span>70</span> */}
            <p>NUMBER OF SCHOOLS / COLLEGES REACHED</p>
          </div>
        </div>
      </div>
    </>
  );
}
