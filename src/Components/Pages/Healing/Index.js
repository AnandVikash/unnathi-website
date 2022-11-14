import React from "react";
import styles from "./healing.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import MainLinksSideBar from "../../Assets/ElementsUi/Sidebar/NavLinksSidebar/Index";
import { FaQuoteLeft } from "react-icons/fa";
import HealingData from "../../Assets/Data/Healing/healing.json";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="Healing"
        titleTag="h1"
        titleColor="#fff"
        localImg="healing-banner.jpg"
        imgColor="696969"
      />
      {/* <div className={styles.HealingCardImg}>
                {" "}
                <img src={img} />
              </div> */}
      <div className={styles.healingAboutUs}>
        <p>
          From the beginning of birth to death, a baby’s first cry to the last
          gasp of a dying person, breath is a crucial element for life. When
          this life giving breath is utilized properly, complete recovery is
          possible. Many religions talk about methods to achieving this and
          Unnathi emphasizes more on the practical and technical approach.
          Healing is the inner recovery process which is inbuilt in every
          individual. Every person’s healing needs are different based on the
          energy levels, chakral energy condition and health condition.
          Therefore, each individual has to be analysed and treated accordingly.
        </p>
        <p>Yogic healing is therefore a necessity to make our life whole.</p>
      </div>
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
