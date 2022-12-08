import React, { useState } from "react";
import styles from "./healing.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import MainLinksSideBar from "../../Assets/ElementsUi/Sidebar/NavLinksSidebar/Index";
import { FaQuoteLeft } from "react-icons/fa";
import HealingData from "../../Assets/Data/Healing/healing.json";
export default function Index() {
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <BannerTitle
        title="Healing"
        titleTag="h1"
        titleColor="#fff"
        localImg="healing.jpg"
        imgColor="696969"
      />
      {/* <div className={styles.HealingCardImg}>
                {" "}
                <img src={img} />
              </div> */}
      <div className={styles.healingAboutUs}>
        <p>
          One highest level of Vedic wisdom is Yogic healing. Human beings are a
          combination of body, mind and soul. The functioning of the body,
          emotions are governed by various chakras (energy centers), quality of
          energy and its uninterrupted flow. The disease or emotional
          disturbances are manifestations of negative energy, imbalanced energy
          centers and congestion of energy meridians and also unhealthy
          panchakoshas. Panchakoshas are five layers of human beings that
          includes Annamayakosha, Pranamayakosha, Manomayakosha,
          Vignanamayakosha and Anandamayakosha. Any disease or mental condition
          manifests into these koshas at energy levels before they impact human
          beings physically and emotionally with a time duration. By diagnosing
          and identifying these negative influences at energy level, we can
          prevent or heal these diseases and mental conditions. Thus, Yogic
          Healing is a science of diagnosing and healing these energy conditions
          to provide relief and recovery to human beings from physical,
          emotional and mental diseases. Many reputed Indian and western
          research centers and universities have experimented and validated
          these concepts.{" "}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read Less" : "Read More "}
          </button>
        </p>

        {readMore && (
          <>
            {" "}
            <p>
              As we are all aware, this world and universe are created out of
              energy. The various entities of this physical world are
              manifestations of this divine energy. The universal consciousness
              manifested into human consciousness. The recent scientific works
              validate this concept – Sir Einstein proved that energy and matter
              are convertible into each other. The physical manifestations of
              this planet and human beings are also a form of energy. Many of
              these universal concepts are not validated scientifically yet as
              science is unable to comprehend beyond measurable. There is a
              vital dimension to this evolution, which is beyond five senses of
              human beings and can be experienced through self-discovery.
            </p>
            <p>
              Our thousands of years old Indian heritage realized these concepts
              and enhanced the daily lives of human beings by synchronizing
              lives with universal laws. As our Vedic scriptures are very deep
              in philosophy and spirituality, it is not easy for normal human
              beings to comprehend and practice without proper guidance of
              evolved teachers. These teachers in our systems are known as
              Rishis, who transformed nature’s essence of high order into simple
              steps to be practiced by people.
            </p>
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "Read Less" : "Read More "}
            </button>
          </>
        )}
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
