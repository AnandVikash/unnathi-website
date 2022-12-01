import React from "react";
import BannerTitle from "../../../../Assets/ElementsUi/BannerTitle/Index";
import MainLinksSideBar from "../../../../Assets/ElementsUi/Sidebar/NavLinksSidebar/Index";
import styles from "./research.module.css";
import SecTitle from "../../../../Assets/ElementsUi/SecTitle";
import Effect from "../../../../Assets/Research/publications/effect-of-yoga-based-biofield-intervention.pdf";
import Meditation from "../../../../Assets/Research/publications/meditation-article.pdf";
import { Link } from "react-router-dom";
export default function Index() {
  return (
    <>
      <main>
        <BannerTitle
          title="Ongoing Research Projects          "
          titleTag="h1"
          titleColor="#fff"
          // img="090b2b.png"
          localImg="banner-5.jpg"
          imgColor="696969"
        />
        {/* <SecTitle
          title=""
          titleTag="p"
          titleColor="#808080"
          text="Unnathi Publications"
          textTag="h1"
          textColor="#000"
        /> */}
        <section className={styles.ReasearchContainer}>
          <article className={styles.publications}>
            <article className={styles.PublicationItemTitle}>
              Build India movement
            </article>
            <article className={styles.PublicationItem}>
              <section className={styles.PublicationTitle}>To Prove </section>
              <section className={styles.PublicationDesc}>
                Effectiveness of Peer counselling on high school and college
                students in improving their well-being
              </section>
              <section className={styles.PublicationTitle}>Place</section>
              <section className={styles.PublicationDesc}>Karnataka</section>
              <section className={styles.PublicationTitle}>Year</section>
              <section className={styles.PublicationDesc}> Since 2016</section>
            </article>
          </article>

          {/* //2nd part */}
          <article className={styles.publications}>
            <article className={styles.PublicationItemTitle}>
              Eye healing project
            </article>
            <article className={styles.PublicationItem}>
              <section className={styles.PublicationTitle}> To Prove </section>
              <section className={styles.PublicationDesc}>
                Impact of Unnathi Yogic healing on the refractive errors- an
                interventional study.
              </section>
              <section className={styles.PublicationTitle}>Place</section>
              <section className={styles.PublicationDesc}>Karnataka</section>
              <section className={styles.PublicationTitle}>Year</section>
              <section className={styles.PublicationDesc}>Ongoing 2022</section>
            </article>
          </article>
        </section>
      </main>
    </>
  );
}
