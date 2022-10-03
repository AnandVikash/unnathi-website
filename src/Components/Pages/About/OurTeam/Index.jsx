import React from "react";
import styles from "./ourTeam.module.css";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";
import OurTeamData from "../../../Assets/Data/OurTeam/ourteam.json";
export default function Index() {
  return (
    <>
      {/* <img
        src={require("../../../Assets/AboutUs/our-team/saraswathi-hegde.png")}
      /> */}
      <div className={styles.ourTeamMainContainer}>
        <div className={styles.ourTeamContainer}>
          <SecTitle
            title="Ready to help"
            titleTag="p"
            titleColor="#808080"
            text="We have thousands of happy volunteer to help you"
            textTag="p"
            textColor="#000"
          />
        </div>
        <div className={styles.ourTeamMembers}>
          <div className={styles.ourTeamContent}>
            {OurTeamData.map((item) => {
              return (
                <>
                  <div key={item.id}>
                    <div className={styles.ourCards}>
                      <div>
                        <img
                          src={require(`../../../Assets/AboutUs/our-team/${item.img}`)}
                        />
                      </div>
                      <div className={styles.ourCardsDesc}>
                        <h3>{item.name}</h3>
                        <p>{item.designation}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
