import React from "react";
import styles from "./research.module.css";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import MainLinksSideBar from "../../Assets/ElementsUi/Sidebar/NavLinksSidebar/Index";
import research from "../../Assets/Research/research.jpg";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="Research"
        titleTag="h1"
        titleColor="#fff"
        // img="090b2b.png"
        localImg="banner-5.jpg"
        imgColor="696969"
      />
      <div className={styles.ResearchMainContainer}>
        <div className={styles.ResearchContainer}>
          <div className={styles.ResearchText}>
            <img src={require("../../Assets/Home/Banner/banner-3.jpg")} />
            {/* <img src={`https://dummyimage.com/884x400/0000FF/090b2b.png`} /> */}
            <p>
              <strong>
                {" "}
                Achieve Holistic Wellbeing Through Yogic Healing- A Research
                Perspective
              </strong>
            </p>
            <p>
              In the phase of human evolution, the concept of innovation,
              invention and reasoning for his day-to-day activities has also
              evolved, and it has become part of his life. In this context,
              research is the doorstep for understanding the perception of life
              in a better way. Human life is incomplete without he acquiring
              wisdom and reaching to a state of contentment, which can be
              addressed by answering to his own questions / thoughts with
              respect to his own well-being. Unnathi is supporting in
              identifying and standardizing the protocol to explore these
              contents.
            </p>
            <p>
              A holistic well-being (state of completeness) is one of the oldest
              concepts known to the word through India. Much of the theories and
              techniques about holistic well-being has been spoken and written
              on scripts since generations; however, many of them have not been
              in practice in daily life to reach to that state of well-being.
              Even though it is a wish/right of everyone, due to lack of proper
              interpretation of these concepts and models, it is a challenge to
              explain to this logical mind. The concepts are not be bring to the
              mainstream of practice. Scientific research is the only way to
              answer the questions on the ancient practices and believes that
              have hidden truth underneath it.
            </p>
            <p>
              To address these issues, Unnathi has put its constant effort by
              testing the hypothesis in scientific manner through which a
              quantifiable effect can be demonstrated and create the evidence in
              this direction.
            </p>
            <p>Dimensions of our research - to answer following questions</p>
            <img src={research} />
            <p>
              <strong>Our key activities:</strong>
            </p>
            <p>
              <ul>
                <li>Creation of evidence on various aspects of healing.</li>
                <li>
                  Training the processional on how to create evidence/ Research
                  approach & methodology.{" "}
                </li>
                <li>
                  Conducting collaborative research with partners in India and
                  outside
                </li>
                <li>Access funding form research from various sources.</li>
                <li>
                  Publication of concepts, findings and aspects in magazines,
                  books, journals and social media.
                </li>
              </ul>
            </p>
            <p>
              <strong>Who can be our partners:</strong>
            </p>
            <p>
              Research students, Doctoral students, Faculties of various
              institutes, medical practitioners, institutions, hospitals and
              academic institutes/universities.{" "}
            </p>
          </div>
          <div className={styles.ResearchSidebar}>
            <MainLinksSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
