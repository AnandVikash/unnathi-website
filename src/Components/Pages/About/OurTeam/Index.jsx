import React from "react";
import styles from "./ourTeam.module.css";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";
import OurTeamData from "../../../Assets/Data/OurTeam/ourteam.json";

import { Link } from "react-router-dom";
export default function Index() {
  let FounderArray = OurTeamData.filter(
    (item) => item.positionType == "founder"
  );
  let AdvisorArray = OurTeamData.filter(
    (item) => item.positionType == "second"
  );
  let MembersArray = OurTeamData.filter(
    (item) => item.positionType !== "founder" && item.positionType !== "second"
  );
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
            {FounderArray?.map((item) => {
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
                        <Link to={`/our-team/${item.link}/${item.id}`}>
                          <h3>{item.name}</h3>
                        </Link>
                        <p>{item.designation}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styles.ourTeamContent}>
            {AdvisorArray.map((item) => {
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
                        <Link to={`/our-team/${item.link}/${item.id}`}>
                          <h3>{item.name}</h3>
                        </Link>
                        <p>{item.designation}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styles.ourTeamContent}>
            {MembersArray?.map((item) => {
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
                        <Link to={`/our-team/${item.link}/${item.id}`}>
                          <h3>{item.name}</h3>
                        </Link>
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
