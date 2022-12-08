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
          title="Publications"
          titleTag="h1"
          titleColor="#fff"
          // img="090b2b.png"
          localImg="researchBanners/research-publications.jpg"
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
              Meditation As A Tool For Enhancing The Wellbeing In Adolescents &
              Adults-pilot Study.
            </article>
            <article className={styles.PublicationItem}>
              <section className={styles.PublicationTitle}>Authors </section>
              <section className={styles.PublicationDesc}>
                Nisarg Aravindan, Bharathi Anjanappa.
              </section>
              <section className={styles.PublicationTitle}>
                Name of the Journal
              </section>
              <section className={styles.PublicationDesc}>
                European Journal of Biomedical and Pharmaceutical Sciences
                2019:6(10);287-294. ISSN 2349-8870.
              </section>
              <section className={styles.PublicationTitle}>Year</section>
              <section className={styles.PublicationDesc}>2019</section>
            </article>
            <article className={styles.PublicationItemDesc}>
              <p>
                With Globalisation and modernization with advanced technology,
                adolescents and young adults are facing new challenges affecting
                their wellbeing. Mental health problems are on the rise with
                approximately one in five (20%) adolescents requiring mental
                health services. Different challenges are seen in adults also.
                Meditation help in reducing the stress, improves physical,
                emotional & mental health and greater wellbeing both in
                adolescents & adults.
              </p>
              <a href={Meditation} target="_blank">
                Know More
              </a>
            </article>
          </article>

          {/* //2nd part */}
          <article className={styles.publications}>
            <article className={styles.PublicationItemTitle}>
              Effect of yoga based biofield intervention on psychological
              distress of childbirth and pregnancy stress A Case series.
            </article>
            <article className={styles.PublicationItem}>
              <section className={styles.PublicationTitle}>Authors </section>
              <section className={styles.PublicationDesc}>
                Nisarg Aravindan, Bharathi Anjanappa.
              </section>
              <section className={styles.PublicationTitle}>
                Name of the Journal
              </section>
              <section className={styles.PublicationDesc}>
                European Journal of Biomedical and Pharmaceutical Sciences
                2019:6(10);287-294. ISSN 2349-8870.
              </section>
              <section className={styles.PublicationTitle}>Year</section>
              <section className={styles.PublicationDesc}>2019</section>
            </article>

            <article className={styles.PublicationItemDesc}>
              <p>
                Pregnancy is a precious part of one's life, factors like
                Anxiety, depression, and stress can impact on mother and child
                with variable adverse outcome. These is an immense need of safe
                supportive systems which can work on mother and baby, so as to
                make the pregnancy and labour as joyful event rather a disease.
              </p>
              <a href={Effect} target="_blank">
                Know More
              </a>
            </article>
          </article>
        </section>
      </main>
    </>
  );
}
