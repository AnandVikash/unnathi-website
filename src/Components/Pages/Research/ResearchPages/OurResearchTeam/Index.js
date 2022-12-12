import React from "react";
// import BannerTitle from "../../../../Assets/ElementsUi/BannerTitle/Index";
// import MainLinksSideBar from "../../../../Assets/ElementsUi/Sidebar/NavLinksSidebar/Index";
import styles from "./research.module.css";
import researchTeam from "../../../../Assets/Data/OurTeam/ourteam.json";
import { Link } from "react-router-dom";
export default function Index() {
  const FilterResearchTeam = researchTeam.filter(
    (item) => item.research == true && item.researchType != "head"
  );
  const FilterResearchHead = researchTeam.filter(
    (item) => item.researchType == "head"
  );
  console.log(FilterResearchTeam);
  return (
    <>
      <main>
        {/* <BannerTitle
          title="Our Research Team"
          titleTag="h1"
          titleColor="#fff"
          // img="090b2b.png"
          localImg="researchBanners/research-team.jpg"
          imgColor="696969"
        /> */}
        <section className={styles.ReasearchContainer}>
          <div className={styles.ourTeamMembers}>
            <div className={styles.ourTeamContent}>
              {FilterResearchHead?.map((item) => {
                return (
                  <>
                    <div className={styles.ourCards} key={item.id}>
                      <div>
                        <img
                          src={require(`../../../../Assets/AboutUs/our-team/${item.img}`)}
                        />
                      </div>
                      <div className={styles.ourCardsDesc}>
                        <Link to={`/our-team/${item.link}/${item.id}`}>
                          <h3>{item.name}</h3>
                        </Link>
                        <p>{item.designation}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className={styles.ourTeamContent}>
              {FilterResearchTeam?.map((item) => {
                return (
                  <>
                    <div className={styles.ourCards} key={item.id}>
                      <div>
                        <img
                          src={require(`../../../../Assets/AboutUs/our-team/${item.img}`)}
                        />
                      </div>
                      <div className={styles.ourCardsDesc}>
                        <Link to={`/our-team/${item.link}/${item.id}`}>
                          <h3>{item.name}</h3>
                        </Link>
                        <p>{item.designation}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
