import React from "react";
import styles from "./welcome.module.css";
import SecTitle from "../../../Assets/ElementsUi/SecTitle";
import belowBannerImg from "../../../Assets/AboutUs/about-feature-img-1.png";
export default function Index() {
  return (
    <>
      <div className={styles.WelcomeMainContainer}>
        <div className={styles.welcomeContainer}>
          <div
            className={styles.welcomeItem}
            // data-aos="fade-up-right"
            // data-aos-delay="300"
            // data-aos-duration="500"
          >
            <div className={styles.welcomeItemImg}>
              <img src={belowBannerImg}></img>
            </div>
          </div>
          <div
            className={styles.welcomeItem}
            data-aos="fade-up-left"
            data-aos-delay="300"
            data-aos-duration="500"
          >
            <SecTitle
              title="Welcome to unnathi"
              titleTag="p"
              titleColor="#808080"
              text="About Unnathi Healing Foundation"
              textTag="p"
              textColor="#000"
              textAlign="left"
            />
            {/* <h2>
              âWe make a living by what we get, we make a life by what we give.â
              â Winston Churchill
            </h2> */}
            <p>
              More than twenty years ago, this brainchild of Dr. Saraswathi
              Hegde was born in Bengaluru as Unnathi Healing Foundation.
              Uplifting the human spirit through yogic healing is the simple but
              profound philosophy behind this Foundation. Dr. Saraswathi Hegde,
              its Founder-President often says that she has two children. One is
              her biological son and the other is Unnathi Healing Foundation.
              The Foundation since its inception has touched and empowered
              people from all walks of life. Starting from reformation of
              prisoners to working with orphans, the Foundation has covered
              people from all ages and walks of life. Unnathi strives to bring
              spiritual awakening among the people it touches. A team of
              spirited, enthusiastic and dedicated staff and volunteers have
              relentlessly worked toward delivering the goals of the Foundation.
              The objectives of Unnathi are to create one healer for every home,
              empower adolescent children through Build India Movement (BIM)
              program, develop young children into responsible citizens for
              future through budding sadhaka program, provide yogic healing
              services, - the list goes on. Unnathi is also collaborating with
              educational institutes, universities, medical centers and
              scientific centers of national importance for various programmes.
            </p>
            {/* <p>
              Founded in 2001, Unnathi stands of upliftment, and overall
              elevation of your being to realize your inner potential.
              Spirituality is self-realization and self-empowerment helps us to
              live a full life with existing resources. With this realization we
              can live life to our full potential beyond the materialistic
              outlook.
            </p>
            <p>
              While striving to do what we can, we also realize that we can do
              better to serve the needs of people with the help of outside
              resources. We bring people and like-minded organizations to look
              at the need and connecting the giver and the receiver. Unnathi
              realizes that the collective need to give support and receive
              support is the secret to completeness.
            </p>
            <p>
              Unnathi Healing Foundationâs Build India Movement seeks to create
              a safe space for adolescents in schools through peer interaction
              with Undergraduate students. This also involves a process of
              support from professionals and institutions as well as through
              awareness sessions aimed to educate these young adults on
              lifestyle, meditation, adolescence and civic responsibility.
            </p>
            <p>
              The dedicated team of employees and volunteers at Unnathi Healing
              Foundation lead by Dr. Saraswathi Hegde is currently working hard
              to create a network of High school adolescents and Health Science
              Undergraduates and executing peer interaction sessions along with
              supporting awareness sessions. The team is united in its vision to
              build a generation of young Indians with social responsibility and
              accountability. The Build India movement has the support of the
              Government of Karnataka through an MOU. It is also being supported
              in its effort by both RGUHS and NIMHANS.
            </p> */}

            {/* <div className={styles.welcomeSubContent}>
              <button>Learn more</button>
              <a>How we work</a>
            </div> */}
          </div>
        </div>
        <div className={styles.visionContainer}>
          <div className={styles.visionDesription}>
            <div className={styles.visionTitle}>Vision</div>
            <p className={styles.visionDesc}>
              Unnathi Healing Foundation influences and transforms lives of
              people it touches through ancient Indian Yogic healing practices
              with inspiration from Grand Master Choa Kok Sui's teachings.
              Unnathi is an instrument to bring in health, joy, happiness, peace
              and abundance into peopleâs lives and facilitate individuals to
              find oneâs purpose of life. Unnathi contributes to the progress of
              India and its people.{" "}
            </p>
          </div>
          {/* <div className={styles.visionDesription}>
            <div className={styles.visionTitle}>Mission </div>
            <p className={styles.visionDesc}>
              Unnathi stands for the upliftment of individuals connected with
              Unnathi academically, emotionally, mentally, socially, physically
              and spiritually. Unnathi intends to develop the future generation
              to be strong, empowered and balanced individuals capable of
              contributing to and driving the development of the community and
              the nation at large.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}
