import React from "react";
import BannerTitle from "../../../../Assets/ElementsUi/BannerTitle/Index";
import MainLinksSideBar from "../../../../Assets/ElementsUi/Sidebar/NavLinksSidebar/Index";
import styles from "./research.module.css";
export default function Index() {
  return (
    <>
      <main>
        <BannerTitle
          title="Register to Collaborate"
          titleTag="h1"
          titleColor="#fff"
          // img="090b2b.png"
          localImg="researchBanners/research-collaborations.jpg"
          imgColor="696969"
        />
        <section className={styles.ReasearchContainer}>
          <article className={styles.ReasearchTextContainer}>
            <p>
              We invite people with scientific research background – medical,
              science, psychological, biotechnology to collaborate with Unnathi.
              <a href="https://forms.gle/a6cC1RviUWoAKD1y5 " target="_blank">
                Click here to register
              </a>
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
