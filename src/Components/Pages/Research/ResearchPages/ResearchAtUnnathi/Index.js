import React from "react";
import BannerTitle from "../../../../Assets/ElementsUi/BannerTitle/Index";
import MainLinksSideBar from "../../../../Assets/ElementsUi/Sidebar/NavLinksSidebar/Index";
import styles from "./research.module.css";
export default function Index() {
  return (
    <>
      <main>
        <BannerTitle
          title="Research At Unnathi"
          titleTag="h1"
          titleColor="#fff"
          // img="090b2b.png"
          localImg="banner-5.jpg"
          imgColor="696969"
        />
        <section className={styles.ReasearchContainer}>
          <article className={styles.ReasearchTextContainer}>
            <p>
              Unnathi believes spirituality is not at loggerhead with science.
              Science is not fully evolved and developed to explain spirituality
              and its nuances. Until Albert Einstein discovered that mass and
              energy are interchangeable, science had no clue about this
              concept. Science has limitations today to evaluate anything beyond
              five senses and immeasurables.
            </p>
            <p>
              Unnathi is collaborating with institutes of national repute and
              people of undisputed scientific background to validate yogic
              healing.
            </p>
          </article>
          <article>
            <MainLinksSideBar />
          </article>
        </section>
      </main>
    </>
  );
}
