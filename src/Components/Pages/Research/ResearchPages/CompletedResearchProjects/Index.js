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
          title="Completed Research Projects          "
          titleTag="h1"
          titleColor="rgb(9, 50, 76)"
          // img="090b2b.png"
          localImg="researchBanners/research-completed.jpg"
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
              Peer Mentoring Project
            </article>
            <article className={styles.PublicationItem}>
              <section className={styles.PublicationTitle}>To Prove </section>
              <section className={styles.PublicationDesc}></section>
              <section className={styles.PublicationTitle}>Place</section>
              <section className={styles.PublicationDesc}>Bangalore</section>
              <section className={styles.PublicationTitle}>Year</section>
              <section className={styles.PublicationDesc}> 2016</section>
            </article>
          </article>

          {/* //2nd part */}
          <article className={styles.publications}>
            <article className={styles.PublicationItemTitle}>
              Kumari Shibira
            </article>
            <article className={styles.PublicationItem}>
              <section className={styles.PublicationTitle}> To Prove </section>
              <section className={styles.PublicationDesc}>
                Effect of mentoring and life skill education in the well being
                of Indian Adolescent girls. An adolescent resident camp
              </section>
              <section className={styles.PublicationTitle}>Place</section>
              <section className={styles.PublicationDesc}>Bangalore</section>
              <section className={styles.PublicationTitle}>Year</section>
              <section className={styles.PublicationDesc}>2022</section>
            </article>
          </article>

          {/* //3rd part */}
          <article className={styles.publications}>
            <article className={styles.PublicationItemTitle}>
              Research mentoring programme for Pharmacy students
            </article>
            <article className={styles.PublicationItem}>
              <section className={styles.PublicationTitle}> To Prove </section>
              <section className={styles.PublicationDesc}></section>
              <section className={styles.PublicationTitle}>Place</section>
              <section className={styles.PublicationDesc}>Bangalore</section>
              <section className={styles.PublicationTitle}>Year</section>
              <section className={styles.PublicationDesc}>2021</section>
            </article>
          </article>
        </section>
      </main>
    </>
  );
}
