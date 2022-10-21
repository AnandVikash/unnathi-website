import React from "react";
import styles from "./healing.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import { Link } from "react-router-dom";
import MainLinksSideBar from "../../Assets/ElementsUi/Sidebar/NavLinksSidebar/Index";
import { FaQuoteLeft } from "react-icons/fa";
import img from "../../Assets/unnathi-png-logo.png";
import HealingData from "../../Assets/Data/Healing/healing.json";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="Healing"
        titleTag="h1"
        titleColor="#fff"
        localImg="banner-5.jpg"
        imgColor="696969"
      />
      {/* <div className={styles.HealingCardImg}>
                {" "}
                <img src={img} />
              </div> */}
      <div className={styles.HealingMainContainer}>
        <div className={styles.HealingContainer}>
          <div
            className={styles.HealingText}
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            {HealingData.map((item) => {
              const { id, Author, AuthorProfession, AuthorLocation, Content } =
                item;
              return (
                <>
                  <div className={styles.HealingCard} key={id}>
                    <FaQuoteLeft />
                    {/* <div className={styles.HealingCardImg}>
                      <img src={img} />
                    </div> */}
                    <div
                      className={styles.HealingCardContent}
                      dangerouslySetInnerHTML={{ __html: Content }}
                    ></div>
                    <hr />
                    <div className={styles.HealingCardAuthor}>
                      <p>{Author}</p>
                      <p>
                        <span>{`${AuthorProfession}  ${AuthorLocation} `}</span>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div
            className={styles.HealingSidebar}
            data-aos="fade-up-left"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <MainLinksSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
